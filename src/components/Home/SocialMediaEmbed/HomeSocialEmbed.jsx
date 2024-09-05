import { useState } from "react";
import Loader from "../../../components/shared/Loaders/Loader";
import { useLoading } from "../../../contexts/LoadingContext";
import { useQuery } from "@tanstack/react-query";
import SocialMediaEmbeds from "./SocialMediaEmbeds";

const HomeSocialEmbed = () => {
  const { data: allYoutubeLinks = [] } = useQuery({
    queryKey: ["allYoutubeLinks"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/youtube-video`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const { isLoading, setIsLoading } = useLoading();
  const [socialSelect, setSocialSelect] = useState(0);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const socialSelectButtons = [
    { id: 0, buttonName: "Facebook" },
    { id: 1, buttonName: "Instagram" },
    { id: 2, buttonName: "Linkedin" },
  ];

  return (
    <section>
      <div className="max-w-screen-xl mx-auto justify-between">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 text-center pt-8 pb-8">
          {/* YouTube Embed */}
          {allYoutubeLinks.length > 0 && (
            <div className="HomeSocial">
              <iframe
                src={allYoutubeLinks[0].video_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-80"
              ></iframe>
            </div>
          )}

          {/* Social Media Section */}
          <div className="hidden md:block lg:block xl:block text-left xl:ml-20">
            <div className="flex bg-gray-200 w-[500px] ">
              {socialSelectButtons.map((button, index) => (
                <button
                  key={index}
                  className={`${
                    socialSelect === index ? "bg-white" : "bg-gray-200"
                  } btn-sm text-primary font-bold py-2 px-4 transition-colors duration-300 ease-in-out bg-gray-200 text-regular`}
                  onClick={() => setSocialSelect(index)}
                >
                  {button.buttonName}
                </button>
              ))}
            </div>

            {/* Loader and Embed */}
            {isLoading && <Loader />}
            <div className="">
              <SocialMediaEmbeds
                socialSelect={socialSelect}
                handleLoadStart={handleLoadStart}
                handleLoadEnd={handleLoadEnd}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSocialEmbed;

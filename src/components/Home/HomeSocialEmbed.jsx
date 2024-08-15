import { useState } from "react";
import { InstagramEmbed } from "react-social-media-embed";
import Loader from "../../components/shared/Loaders/Loader";
import { useLoading } from "../../contexts/LoadingContext";

import "../../styles/Home.css";
import { useQuery } from "@tanstack/react-query";

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

  // Set isLoading to false when the iframe finishes loading
  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const socialSelectButtons = [
    {
      id: 1,
      buttonName: "Facebook",
    },
    {
      id: 2,
      buttonName: "Instagram",
    },
    {
      id: 3,
      buttonName: "Linkedin",
    },
  ];

  console.log(allYoutubeLinks);

  const SocialSelectComponents = ({ index }) => {
    switch (index) {
      case 0:
        return (
          <>
            {isLoading && <Loader />}
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRahimafrooz&tabs=timeline&width=560&height=320&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="560"
              height="280"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              // eslint-disable-next-line react/no-unknown-property
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            ></iframe>
          </>
        );
      case 1:
        return (
          <>
            {isLoading && <Loader />}
            <InstagramEmbed
              url="https://www.instagram.com/rahimafroozbd/"
              width={560}
              height={280}
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            />
          </>
        );
        // eslint-disable-next-line no-unreachable
        break;
      case 2:
        return (
          <>
            <iframe
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25420059"
              // eslint-disable-next-line react/no-unknown-property
              frameborder="0"
              width="560"
              height="280"
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            ></iframe>
          </>
        );
        // eslint-disable-next-line no-unreachable
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 text-center text-white pt-8 pb-8">
          {allYoutubeLinks.length > 0 && (
            <div className="HomeSocial">
              <iframe
                src={allYoutubeLinks[0].video_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          )}
          <div className="hidden lg:block text-left bg-white">
            {socialSelectButtons.map((button, index) => {
              return (
                <button
                  key={index}
                  className={
                    socialSelect == index
                      ? "HomeSocialButtomSelect"
                      : "HomeSocialButtom"
                  }
                  onClick={() => setSocialSelect(index)}
                >
                  {button.buttonName}
                </button>
              );
            })}
            <SocialSelectComponents index={socialSelect} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSocialEmbed;

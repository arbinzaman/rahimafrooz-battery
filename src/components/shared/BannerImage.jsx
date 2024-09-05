import { useQuery } from "@tanstack/react-query";

const BannerImage = ({ bannerImageProps }) => {
  const { pageKey, LocallySavedBanner } = bannerImageProps;

  // Banner Images
  const { data: bannerImages = [], error: bannerImageFetchError } = useQuery({
    queryKey: ["bannerImages"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/banner-images`);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });
  const bannerImage =
    (Array.isArray(bannerImages) &&
      bannerImages?.find((item) => item.page_name === pageKey)?.img_url) ||
    [];

  const dummyImage = (
    <div>
      <img src={LocallySavedBanner} className="" alt="" />
    </div>
  );
  return (
    <div>
      {bannerImageFetchError ? (
        dummyImage
      ) : Array.isArray(bannerImage) && bannerImage?.length !== 0 ? (
        <div>
          <img src={bannerImage[0]} className="w-full" alt="" />
        </div>
      ) : (
        dummyImage
      )}
    </div>
  );
};

export default BannerImage;

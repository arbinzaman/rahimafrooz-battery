/* eslint-disable react/no-unknown-property */
import { InstagramEmbed } from "react-social-media-embed";

const SocialMediaEmbeds = ({
  socialSelect,
  handleLoadEnd,
  handleLoadStart,
}) => {
  const renderEmbed = () => {
    switch (socialSelect) {
      case 0:
        return (
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRahimafrooz&tabs=timeline&width=500&height=282&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="500"
            height="282"
            // className="w-full fb-page "
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameborder="0"
            allowfullscreen="true"
            data-width="500"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        );
      case 1:
        return (
          <InstagramEmbed
            url="https://www.instagram.com/rahimafroozbd/"
            width={500}
            height={282}
            onLoad={handleLoadEnd}
            onLoadStart={handleLoadStart}
            hideCaption={false}
            containerTagName="div"
            injectScript
            protocol=""
          />
        );
      case 2:
        return (
          <iframe
            src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25420059"
            frameborder="0"
            width="500"
            height="282"
            onLoad={handleLoadEnd}
            onLoadStart={handleLoadStart}
          ></iframe>
        );
      default:
        return null;
    }
  };

  return <div>{renderEmbed()}</div>;
};

export default SocialMediaEmbeds;

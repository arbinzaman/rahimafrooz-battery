import homeMotionGif from "../../assets/images/HomePage/rahimafrooz-motion-Gif.gif";
import motionMobileGif from "../../assets/images/HomePage/milstone_motion mobile_gif_30_sec.gif";
import "../../styles/Home.css"

const HomeMotionGif = () => {
    return (
        <section
            className="pt-16 pb-16 relative"
            style={{ top: "-32px", backgroundColor: "#fbfbfb" }}
        >
            <div className="hidden lg:block text-center max-w-7xl mx-auto">
                <img src={homeMotionGif} alt="video" />
            </div>
            <div className="lg:hidden text-center max-w-7xl mx-auto">
                <img src={motionMobileGif} alt="video" />
            </div>
        </section>
    )
}

export default HomeMotionGif
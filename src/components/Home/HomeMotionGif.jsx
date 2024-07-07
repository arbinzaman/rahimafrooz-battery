import React from 'react'
import homeMotionGif from "../../assets/images/HomePage/rahimafrooz-motion-Gif.gif";
import "../../styles/Home.css"

const HomeMotionGif = () => {
    return (
        <section
            className="pt-16 pb-16 relative"
            style={{ top: "-32px", backgroundColor: "#fbfbfb" }}
        >
            <div className="text-center max-w-7xl mx-auto">
                <img src={homeMotionGif} alt="video" />
            </div>
        </section>
    )
}

export default HomeMotionGif
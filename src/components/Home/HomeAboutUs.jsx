import React from 'react'

import "../../styles/Home.css"

const HomeAboutUs = () => {
    return (
        <>
            <section
                className="pt-8 pb-8 hidden lg:block relative Home-bg"
                style={{ top: "-32px", backgroundColor: "#fbfbfb" }}
            >
                <div className="text-center max-w-screen-xl mx-auto">
                    <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 mb-8">
                        ABOUT US
                    </h1>
                    <p className="text-2xl text-gray-500 opacity-95 mb-8">
                        Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi
                        battery industry. Rahimafrooz Storage Power Business (RSPB) is the
                        core business of the Group, with leadership in the local and some
                        international markets. As the leading supplier of lead acid
                        batteries in Bangladesh with the latest technology of batteries,
                        RSPB serves the most extensive network of dealers and retailers.
                    </p>
                    <a href="/manufacturing">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                            More Details
                        </button>
                    </a>
                </div>
            </section>

            {/* Mobile screen */}

            <section className="bg-sky-600 rounded-3xl pt-8 pb-8 mt-8 mb-12 lg:hidden max-w-sm mx-auto">
                <div className="text-right max-w-xs mx-auto">
                    <h1 className="text-xl text-center font-semibold text-sky-300 opacity-95 mb-8">
                        ABOUT
                    </h1>
                    <p className="text-sm text-left text-sky-300 opacity-95 mb-8">
                        Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi
                        battery industry. Rahimafrooz Storage Power Business (RSPB) is the
                        core business of the Group, with leadership in the local and some
                        international markets. As the leading supplier of lead acid
                        batteries in Bangladesh with the latest technology of batteries,
                        RSPB serves the most extensive network of dealers and retailers.
                    </p>
                    <button className="bg-sky-400 hover:bg-blue-700 text-blue-100 text-sm font-bold py-1 px-3 rounded">
                        More Details
                    </button>
                </div>
            </section>
        </>
    )
}

export default HomeAboutUs
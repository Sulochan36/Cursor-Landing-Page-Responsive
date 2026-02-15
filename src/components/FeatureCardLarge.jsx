import React from "react";

const FeatureCardLarge = ({ title, desc, linkText, image, video, reverse = false }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 justify-evenly items-center bg-[#1b1913] rounded-xl px-2 md:p-4 py-2 m  mx-auto gap-12 md:gap-15 transition hover:bg-[#222018]">

            {/* Media */}
            <div className={reverse ? "md:order-1" : "md:order-2"}>
                {video ? (
                    <video autoPlay muted loop playsInline className="rounded-lg">
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <img src={image} alt="feature" className="rounded-lg" />
                )}
            </div>

            
            <div className={reverse ? "md:order-2" : "md:order-1"}>

                <h3 className="text-white text-xl md:text-2xl font-normal leading-tight max-w-lg">
                    {title}
                </h3>

                <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-md leading-relaxed">
                    {desc}
                </p>

                <a href="#" className="inline-block mt-8 text-orange-500 hover:text-orange-600 text-lg">
                    {linkText} →
                </a>

            </div>

        </div>
    );
};

export default FeatureCardLarge;

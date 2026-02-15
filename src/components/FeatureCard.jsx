import React from "react";

const FeatureCard = ({ title, desc, linkText, image, video }) => {
    return (
        <div className="bg-[#1b1913] rounded-xl p-6 flex flex-col justify-between min-h-[420px] hover:bg-[#222018] transition">

            <div>

                <h3 className="text-white text-base leading-relaxed">
                    {title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mt-2">
                    {desc}
                </p>

                <a href="#" className="inline-block mt-4 text-orange-500 hover:text-orange-600 text-sm">
                    {linkText}
                </a>

            </div>


            <div className="mt-6">

                {video ? (
                    <video autoPlay muted loop playsInline className="rounded-lg w-full">
                        <source src={video} type="video/mp4" />
                    </video>
                ) : (
                    <img src={image} alt="feature" className="rounded-lg w-full" />
                )}

            </div>

        </div>
    );
};

export default FeatureCard;

import React from "react";

const HighlightCard = ({ title, info, type, date }) => {

    return (

        <div className="bg-[#201e18] border border-[#edecec0f] rounded-md p-5 pr-16 hover:bg-[#2b2923] transition cursor-pointer w-full">


            <div>

                <p className="text-gray-200 text-base font-normal leading-relaxed">
                    {title}
                </p>

                <p className="text-gray-400 text-base font-normal leading-relaxed mt-1">
                    {info}
                </p>

            </div>




            <div className="text-gray-400 text-sm mt-5">

                <span>
                    {type} ·
                </span>

                <time className="ml-1">
                    {date}
                </time>

            </div>


        </div>

    );

};

export default HighlightCard;

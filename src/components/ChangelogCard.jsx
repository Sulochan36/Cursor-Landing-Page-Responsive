import React from "react";

const ChangelogCard = ({ version, date, desc }) => {

    return (

        <div className="bg-[#1b1913] rounded-xl p-6 min-h-[140px] hover:bg-[#222018] transition">

            {/* Info */}

            <div className="flex items-center gap-2 text-gray-400 text-sm">

                {version && (
                    <span className="border border-gray-500 px-2 py-[2px] rounded-full text-xs text-gray-300">
                        {version}
                    </span>
                )}

                <span>
                    {date}
                </span>

            </div>


            {/* Description */}

            <p className="text-white text-base mt-3 leading-relaxed">
                {desc}
            </p>


        </div>

    );

};

export default ChangelogCard;

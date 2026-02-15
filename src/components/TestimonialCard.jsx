import React from "react";

const TestimonialCard = ({ comment, avatar, name, role }) => {
    return (
        <div className="bg-[#1b1913] rounded-xl pt-4 pb-5 px-5 flex h-full">

            <figure className="flex flex-col h-full">

                <blockquote className="flex-grow">

                    <p className="text-gray-300 text-base leading-relaxed">
                        {comment}
                    </p>

                </blockquote>

                <div className="flex items-center mt-10">

                    <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />

                    <figcaption className="flex flex-col ml-3">

                        <div className="text-white text-sm">
                            {name}
                        </div>

                        <span className="text-gray-400 text-sm">
                            {role}
                        </span>

                    </figcaption>

                </div>

            </figure>

        </div>
    );
};

export default TestimonialCard;

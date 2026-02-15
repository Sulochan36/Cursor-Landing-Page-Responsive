import React from "react";
import Container from "../components/Container";
import FeatureCard from "../components/FeatureCard";

const FeaturesGrid = () => {

    const features = [

        {
            title: "Access the best models",
            desc: "Choose between every cutting-edge model from OpenAI, Anthropic, Gemini and xAI.",
            linkText: "Explore models ↗",
            image: "/feature 4.png"
        },

        {
            title: "Complete codebase understanding",
            desc: "Cursor learns how your codebase works, no matter the scale or complexity.",
            linkText: "Learn about semantic search ↗",
            video: "/feature 5.mp4"
        },

        {
            title: "Develop enduring software",
            desc: "Trusted by over half of the Fortune 500 to accelerate development, securely and at scale.",
            linkText: "Explore enterprise ↗",
            image: "/feature 6.png"
        }

    ];


    return (

        <section className="py-24">

            <Container>

                {/* Heading */}

                <div className="mb-8">

                    <h2 className="text-white text-2xl md:text-3xl font-normal">
                        Stay on the frontier
                    </h2>

                </div>


                {/* Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                    {features.map((item, index) => (

                        <FeatureCard
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            linkText={item.linkText}
                            image={item.image}
                            video={item.video}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

};

export default FeaturesGrid;

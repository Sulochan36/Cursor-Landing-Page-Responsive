import React from "react";
import Container from "../components/Container";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {

    const testimonials = [

        {
            comment: "It was night and day from one batch to another, adoption went from single digits to over 80%. It just spread like wildfire, all the best builders were using Cursor.",
            avatar: "/Avatars/diana-hu-avatar.webp",
            name: "Diana Hu",
            role: "General Partner, Y Combinator"
        },

        {
            comment: "The most useful AI tool that I currently pay for, hands down, is Cursor. It's fast, autocompletes when and where you need it to, handles brackets properly, sensible keyboard shortcuts, bring-your-own-model... everything is well put together.",
            avatar: "/Avatars/shadcn-avatar.webp",
            name: "shadcn",
            role: "Creator of shadcn/ui"
        },

        {
            comment: "The best LLM applications have an autonomy slider: you control how much independence to give the AI. In Cursor, you can do Tab completion, Cmd+K for targeted edits, or you can let it rip with the full autonomy agentic version.",
            avatar: "/Avatars/andrej-karpathy-avatar.webp",
            name: "Andrej Karpathy",
            role: "CEO, Eureka Labs"
        },

        {
            comment: "Cursor quickly grew from hundreds to thousands of extremely enthusiastic Stripe employees. We spend more on R&D and software creation than any other undertaking.",
            avatar: "/Avatars/patrick-collison-avatar.webp",
            name: "Patrick Collison",
            role: "Co-Founder & CEO, Stripe"
        },

        {
            comment: "It's official. I hate vibe coding. I love Cursor tab coding. It's wild.",
            avatar: "/Avatars/theprimeagen-avatar.webp",
            name: "ThePrimeagen",
            role: "@ThePrimeagen"
        },

        {
            comment: "It's definitely becoming more fun to be a programmer. It's less about digging through pages and more about what you want to happen.",
            avatar: "/Avatars/greg-brockman-avatar.webp",
            name: "Greg Brockman",
            role: "President, OpenAI"
        }

    ];

    return (

        <section className="py-24 flex flex-col justify-center items-center">

            <Container>

                {/* Heading */}

                <div className="mb-16 flex flex-col justify-center items-center">

                    <h2 className="text-white text-3xl md:text-4xl font-normal">
                        The new way to build software.
                    </h2>

                </div>


                {/* Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-3">

                    {testimonials.map((item, index) => (

                        <TestimonialCard
                            key={index}
                            comment={item.comment}
                            avatar={item.avatar}
                            name={item.name}
                            role={item.role}
                        />

                    ))}

                </div>

            </Container>

        </section>

    );

};

export default Testimonials;

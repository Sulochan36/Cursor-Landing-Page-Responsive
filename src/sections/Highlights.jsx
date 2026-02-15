import React from "react";
import Container from "../components/Container";
import HighlightCard from "../components/HighlightCard";

const Highlights = () => {


    const posts = [

        {
            title: "Introducing Cursor 2.0 and Composer",
            info: "A new interface and our first coding model, both purpose-built for working with agents.",
            type: "Product",
            date: "Oct 28, 2025"
        },

        {
            title: "Improving Cursor Tab with online RL",
            info: "Our new Tab model makes 21% fewer suggestions while having 28% higher accept rate.",
            type: "Research",
            date: "Sep 12, 2025"
        },

        {
            title: "1.5x faster MoE training with custom MXFP8 kernels",
            info: "Achieving a 3.5x MoE layer speedup with a complete rebuild for Blackwell GPUs.",
            type: "Research",
            date: "Aug 29, 2025"
        }

    ];


    return (

        <section className="bg-[#1b1913] py-24">

            <Container>


                <div className="flex flex-col lg:flex-row lg:gap-32">


                    {/* Heading */}

                    <div className="mb-6 lg:mb-0">

                        <h2 className="text-gray-300 text-sm font-normal">
                            Recent Highlights
                        </h2>

                    </div>



                    {/* Cards */}

                    <div className="flex flex-col gap-3 w-full max-w-2xl">


                        {posts.map((post, index) => (

                            <HighlightCard
                                key={index}
                                title={post.title}
                                info={post.info}
                                type={post.type}
                                date={post.date}
                            />

                        ))}



                        {/* Link */}

                        <div className="mt-4">

                            <a href="#" className="text-orange-500 hover:text-orange-600 text-sm">

                                View more posts →

                            </a>

                        </div>


                    </div>


                </div>


            </Container>

        </section>

    );

};

export default Highlights;

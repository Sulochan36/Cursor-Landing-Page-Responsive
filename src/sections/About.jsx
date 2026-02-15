import React from "react";
import Container from "../components/Container";

const About = () => {

    return (

        <section className="py-28">

            <Container className="flex flex-col items-start">


                {/* Heading */}

                <div className="mb-6">

                    <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight tracking-[-0.02em] max-w-3xl">
                        Cursor is an applied team focused
                        <br className="hidden md:block" />
                        on building the future of coding.
                    </h2>

                </div>



                {/* CTA */}

                <div className="mb-14">

                    <button className="border border-white text-white rounded-full px-6 py-3 text-sm hover:bg-white hover:text-black transition">

                        Join Us →

                    </button>

                </div>



                {/* Image */}

                <div className="w-full">

                    <img
                        src="/homepage-team-photo.webp"
                        alt="Cursor team"
                        className="w-full h-auto rounded-xl object-cover"
                    />

                </div>


            </Container>

        </section>

    );

};

export default About;

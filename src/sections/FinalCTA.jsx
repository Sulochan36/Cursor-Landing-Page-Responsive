import React from "react";
import Container from "../components/Container";

const FinalCTA = () => {

    return (

        <section className="py-32">

            <Container className="flex flex-col items-center justify-center text-center">


                {/* Heading */}

                <div className="mb-6">

                    <h2 className="text-gray-200 text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-[-0.03em]">
                        Try Cursor now.
                    </h2>

                </div>



                {/* Button */}

                <div>

                    <button className="flex items-center gap-2 border border-white text-black bg-white px-6 py-3 rounded-full text-sm font-normal hover:bg-transparent hover:text-white transition">

                        <span>
                            Download for Windows
                        </span>

                        <span className="text-lg">
                            ⤓
                        </span>

                    </button>

                </div>


            </Container>

        </section>

    );

};

export default FinalCTA;

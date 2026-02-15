import React from "react";
import Container from "../components/Container";
import ChangelogCard from "../components/ChangelogCard";

const Changelog = () => {


    const logs = [

        {
            version: "2.4",
            date: "Jan 22, 2026",
            desc: "Subagents, Skills, and Image Generation"
        },

        {
            date: "Jan 16, 2026",
            desc: "CLI Agent Modes and Cloud Handoff"
        },

        {
            date: "Jan 8, 2026",
            desc: "New CLI Features and Improved CLI Performance"
        },

        {
            version: "2.3",
            date: "Dec 22, 2025",
            desc: "Layout Customization and Stability Improvements"
        }

    ];


    return (

        <section className="py-24">

            <Container>


                {/* Heading */}

                <div className="mb-8">

                    <h2 className="text-white text-2xl md:text-3xl font-normal">
                        Changelog
                    </h2>

                </div>



                {/* Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

                    {logs.map((log, index) => (

                        <ChangelogCard
                            key={index}
                            version={log.version}
                            date={log.date}
                            desc={log.desc}
                        />

                    ))}

                </div>



                <div className="mt-6">

                    <a href="#" className="text-orange-500 hover:text-orange-600 text-sm">
                        See what's new in Cursor →
                    </a>

                </div>


            </Container>

        </section>

    );

};

export default Changelog;

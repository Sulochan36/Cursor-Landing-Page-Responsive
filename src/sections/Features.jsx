import React from "react";
import Container from "../components/Container";
import FeatureCardLarge from "../components/FeatureCardLarge";

const Features = () => {
    return (
        <section className="py-24">

            <Container className="space-y-24">

                <FeatureCardLarge
                    title="Agent turns ideas into code"
                    desc="A human-AI programmer, orders of magnitude more effective than any developer alone."
                    linkText="Learn about Agent"
                    image="/feature 1.png"
                />

                <FeatureCardLarge
                    title="Magically accurate autocomplete"
                    desc="Our custom Tab model predicts your next action with striking speed and precision."
                    linkText="Learn about Tab"
                    video="/feature 2.mp4"
                    reverse
                />

                <FeatureCardLarge
                    title="Everywhere software gets built"
                    desc="Cursor is in GitHub reviewing your PRs, a teammate in Slack, and anywhere else you work."
                    linkText="Learn about Cursor's ecosystem"
                    image="/feature 3.png"
                />

            </Container>

        </section>
    );
};

export default Features;

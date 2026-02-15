import React from 'react'
import Container from '../components/Container'

const Hero = () => {
    return (
        <section className="pt-32 pb-16">

            <Container>

                <div className="max-w-3xl">

                    <h1 className="text-xl md:text-3xl font-normal leading-tight ">

                        Built to make you extraordinarily productive,
                        <br/>
                        Cursor is the best way to code with AI.

                    </h1>

                    <button className="mt-6 border border-white px-6 py-3 rounded-full flex gap-2">

                        Download for Windows ⤓

                    </button>

                </div>

                <img src="./images/hero_image.png" className="mt-10 rounded-xl" />

            </Container>

        </section>
    )
}

export default Hero
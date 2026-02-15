import React from 'react'
import Container from '../components/Container'




const SocialProofs = () => {

    const logos = [
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-beae7a1f5d7eb381a872.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-53062f7690ae5b0cdbed.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-eb9e0a5931092d4db1dd.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-da55192921531e5fd2ba.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-e3678011b17782740f98.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-105275382af564c3ab7c.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-cf60827b1c3f341d19ef.svg",
        "https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/misc/asset-37d2d1a1edcce15ca38c.svg"
    ];

    return (
        <section className="py-16 md:py-24">

            <Container>

                <div className="text-center mb-8">

                    <p className="text-sm text-white">
                        Trusted every day by millions of professional developers.
                    </p>

                </div>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">

                    {logos.map((logo, index) => (

                        <div key={index} className="bg-[#1b1913] rounded-lg h-[80px] flex items-center justify-center p-5">

                            <img
                                src={logo}
                                alt="company logo"
                                className=" opacity-70 hover:opacity-100 transition duration-300"
                                width={200}
                                height={100}
                            />

                        </div>

                    ))}

                </div>

            </Container>

        </section>

    )
}

export default SocialProofs
import React from 'react'
import Container from './Container'

const Navbar = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#14120b] border-b border-white/10">

            <Container className="flex h-15 items-center justify-between">

                <img src="./General Logos/Lockup Horizontal/PNG/LOCKUP_HORIZONTAL_2D_DARK.png" className="w-25" />

                <ul className="hidden md:flex gap-6 text-sm text-white/80">

                    <li className="hover:text-white cursor-pointer">Product</li>
                    <li className="hover:text-white cursor-pointer">Enterprise</li>
                    <li className="hover:text-white cursor-pointer">Pricing</li>
                    <li className="hover:text-white cursor-pointer">Resources</li>

                </ul>

                <div className="flex gap-3">

                    <button className="border border-white/20 px-4 py-1 rounded-full text-sm hover:bg-white hover:text-black">
                        Sign in
                    </button>

                    <button className="bg-white text-black px-4 py-1 rounded-full text-sm">
                        Download
                    </button>

                </div>

            </Container>

        </header>
    )
}

export default Navbar
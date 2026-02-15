import Container from "./Container";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1b1913] text-gray-300 px-5 pt-16 pb-8 font-sans">

            {/* Top Links Grid */}
            <Container>

            <div className="max-w-[1300px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6 mb-20">

                {/* Product */}

                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Product</h4>

                    <div className="flex flex-col space-y-2 text-sm text-gray-200">

                        <a href="#">Agents</a>
                        <a href="#">Enterprise</a>
                        <a href="#">Code Review</a>
                        <a href="#">Tab</a>
                        <a href="#">CLI</a>
                        <a href="#">Cloud Agents</a>
                        <a href="#">Pricing</a>

                    </div>
                </div>


                {/* Resources */}

                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Resources</h4>

                    <div className="flex flex-col space-y-2 text-sm text-gray-200">

                        <a href="#">Download</a>
                        <a href="#">Changelog</a>
                        <a href="#">Docs</a>
                        <a href="#">Learn</a>
                        <a href="#">Forum</a>
                        <a href="#">Status</a>

                    </div>
                </div>


                {/* Company */}

                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Company</h4>

                    <div className="flex flex-col space-y-2 text-sm text-gray-200">

                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Community</a>
                        <a href="#">Workshops</a>
                        <a href="#">Students</a>
                        <a href="#">Brand</a>
                        <a href="#">AnySphere</a>

                    </div>
                </div>


                {/* Legal */}

                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Legal</h4>

                    <div className="flex flex-col space-y-2 text-sm text-gray-200">

                        <a href="#">Terms of Service</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Data Use</a>
                        <a href="#">Security</a>

                    </div>
                </div>


                {/* Connect */}

                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-4">Connect</h4>

                    <div className="flex flex-col space-y-2 text-sm text-gray-200">

                        <a href="#">X</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">YouTube</a>

                    </div>
                </div>

            </div>



            {/* Bottom Meta */}

            <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-[#2a2822] text-sm text-gray-400">


                {/* Left */}

                <div className="flex items-center gap-2 flex-wrap">

                    <span>© 2026 AnySphere, Inc.</span>

                    <span className="flex items-center gap-1">

                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">

                            <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524z" />

                            <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />

                        </svg>

                        SOC 2 Certified

                    </span>

                </div>



                {/* Right */}

                <div className="flex items-center gap-4 flex-wrap">


                    {/* Theme Buttons */}

                    <div className="flex items-center bg-[#26241e] border border-[#1f1f1f] rounded-full p-[2px]">

                        <button className="w-9 h-6 grid place-items-center rounded-full hover:bg-white/10">

                            💻

                        </button>

                        <button className="w-9 h-6 grid place-items-center rounded-full hover:bg-white/10">

                            ☀️

                        </button>

                        <button className="w-9 h-6 grid place-items-center rounded-full hover:bg-white/10">

                            🌙

                        </button>

                    </div>



                    {/* Language Select */}

                    <div className="flex items-center gap-2 bg-[#26241e] border border-[#1f1f1f] rounded-full px-3 py-[3px]">

                        🌐

                        <select className="bg-transparent outline-none text-sm cursor-pointer">

                            <option>English</option>
                            <option>简体中文</option>
                            <option>日本語</option>
                            <option>繁體中文</option>

                        </select>

                    </div>


                </div>


            </div>
            </Container>
        </footer>
    )
}

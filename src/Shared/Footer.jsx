import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="pt-16 pb-7 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-14 border-b-2 border-gray-200">
                    <div className="flex flex-col gap-8 xl:gap-14 w-full lg:max-w-full mx-auto">
                        <div className="flex flex-col gap-8">
                            <Link to='/' className='inline-flex items-center'>
                                <img className='bg-red-600 rounded-full' src="https://i.ibb.co/pj0JM85/7uptheme-logo.png" />
                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-500'>
                                    Juice Hub
                                </span>
                            </Link>
                            <p className="text-base font-normal text-gray-500 max-[470px]:text-center">Take the First Step Towards Success!</p>

                        </div>
                        <div className="flex  flex-col min-[470px]:flex-row min-[470px]:items-center gap-3">

                            <button
                                className="flex items-center max-[470px]:justify-center gap-2 border-2 border-yellow-800 py-2.5 pr-5 pl-7 rounded-full text-base font-semibold text-yellow-800 bg-white shadow-transparent shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-800 hover:text-white ">Contact Me
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M11.1675 16.2888L11.7331 15.7231L11.1675 16.2888ZM3.71117 8.83253L3.14549 9.39822L3.14549 9.39822L3.71117 8.83253ZM17.0155 13.9496L17.5812 13.3839L17.5812 13.3839L17.0155 13.9496ZM14.9443 11.8784L14.3787 12.4441L14.3787 12.4441L14.9443 11.8784ZM7.78046 4.71452L7.21477 5.28021L7.21477 5.28021L7.78046 4.71452ZM6.0504 2.98447L6.61609 2.41878L6.61609 2.41878L6.0504 2.98447ZM11.533 11.8784L10.9673 12.4441L10.9673 12.4441L11.533 11.8784ZM7.78046 8.1259L8.34614 7.56021L8.34614 7.56021L7.78046 8.1259ZM7.78046 6.42021L8.34614 6.9859L8.34614 6.9859L7.78046 6.42021ZM13.2387 11.8784L13.8043 12.4441L13.8043 12.4441L13.2387 11.8784ZM3.71118 2.98447L3.14549 2.41878L3.71118 2.98447ZM17.0155 16.2888L17.5812 16.8545L17.5812 16.8545L17.0155 16.2888ZM12.4788 4.30734C12.0397 4.25754 11.6435 4.57306 11.5937 5.01208C11.5439 5.45109 11.8594 5.84735 12.2984 5.89714L12.4788 4.30734ZM14.0745 7.5725C14.1473 8.00829 14.5596 8.30255 14.9954 8.22976C15.4312 8.15697 15.7254 7.74468 15.6526 7.30889L14.0745 7.5725ZM11.5122 6.98575C11.0732 6.93595 10.6769 7.25147 10.6271 7.69048C10.5773 8.1295 10.8928 8.52576 11.3319 8.57555L11.5122 6.98575ZM11.5607 8.78902C11.6335 9.22481 12.0458 9.51908 12.4816 9.44628C12.9174 9.37349 13.2116 8.96121 13.1388 8.52541L11.5607 8.78902ZM13.5861 1.71878C13.1457 1.6833 12.7599 2.01155 12.7244 2.45195C12.689 2.89236 13.0172 3.27813 13.4576 3.31362L13.5861 1.71878ZM16.666 6.35769C16.7246 6.79562 17.1271 7.10315 17.565 7.04458C18.003 6.98601 18.3105 6.58352 18.2519 6.14559L16.666 6.35769ZM11.7331 15.7231L4.27686 8.26685L3.14549 9.39822L10.6018 16.8545L11.7331 15.7231ZM17.5812 13.3839L15.51 11.3127L14.3787 12.4441L16.4498 14.5153L17.5812 13.3839ZM8.34614 4.14884L6.61609 2.41878L5.48472 3.55016L7.21477 5.28021L8.34614 4.14884ZM8.34614 6.9859C9.12957 6.20246 9.12957 4.93227 8.34614 4.14884L7.21477 5.28021C7.37336 5.4388 7.37336 5.69593 7.21477 5.85452L8.34614 6.9859ZM7.21477 5.85452C6.43134 6.63796 6.43134 7.90815 7.21477 8.69158L8.34614 7.56021C8.18755 7.40162 8.18755 7.14449 8.34614 6.9859L7.21477 5.85452ZM12.673 11.3127C12.5144 11.4713 12.2572 11.4713 12.0987 11.3127L10.9673 12.4441C11.7507 13.2275 13.0209 13.2275 13.8043 12.4441L12.673 11.3127ZM15.51 11.3127C14.7266 10.5293 13.4564 10.5293 12.673 11.3127L13.8043 12.4441C13.9629 12.2855 14.2201 12.2855 14.3787 12.4441L15.51 11.3127ZM4.27686 8.26685C2.97438 6.96437 2.97438 4.85264 4.27686 3.55015L3.14549 2.41878C1.21817 4.3461 1.21817 7.4709 3.14549 9.39822L4.27686 8.26685ZM16.4498 15.7231C15.1474 17.0256 13.0356 17.0256 11.7331 15.7231L10.6018 16.8545C12.5291 18.7818 15.6539 18.7818 17.5812 16.8545L16.4498 15.7231ZM17.5812 16.8545C18.5396 15.8961 18.5396 14.3423 17.5812 13.3839L16.4498 14.5153C16.7834 14.8488 16.7834 15.3896 16.4498 15.7231L17.5812 16.8545ZM4.27686 3.55015C4.6104 3.21661 5.15118 3.21661 5.48472 3.55016L6.61609 2.41878C5.65771 1.46041 4.10387 1.4604 3.14549 2.41878L4.27686 3.55015ZM12.0987 11.3127L8.34614 7.56021L7.21477 8.69158L10.9673 12.4441L12.0987 11.3127ZM12.2984 5.89714C12.5824 5.92936 12.9837 6.03459 13.3286 6.28252C13.6515 6.51464 13.9614 6.89509 14.0745 7.5725L15.6526 7.30889C15.4671 6.19837 14.9147 5.45216 14.2624 4.98331C13.6322 4.53028 12.9452 4.36025 12.4788 4.30734L12.2984 5.89714ZM11.3319 8.57555C11.3813 8.58116 11.4424 8.60035 11.4825 8.62918C11.4985 8.64068 11.5106 8.65312 11.521 8.66953C11.531 8.68537 11.5492 8.72035 11.5607 8.78902L13.1388 8.52541C13.0467 7.97375 12.7638 7.57971 12.4163 7.32997C12.0909 7.09604 11.7441 7.01205 11.5122 6.98575L11.3319 8.57555ZM13.4576 3.31362C14.4328 3.39219 16.368 4.12904 16.666 6.35769L18.2519 6.14559C17.8106 2.84549 14.9275 1.82686 13.5861 1.71878L13.4576 3.31362Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:max-w-full mx-auto flex flex-col min-[470px]:flex-row justify-between gap-6 sm:gap-20 md:gap-10 xl:gap-24">
                        <div className="">

                            <ul className="flex flex-col max-[470px]:items-center max-[470px]:justify-center gap-6">
                                <li><Link to="/"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Home</Link>
                                </li>
                                <li><Link href="/blogs"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Blog</Link>
                                </li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Pricing</a>
                                </li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Pro
                                    Version</a></li>
                            </ul>
                        </div>
                        <div className="">

                            <ul className="flex flex-col max-[470px]:items-center max-[470px]:justify-center gap-6">
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Figma
                                    UI System</a></li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Icons
                                    Assets</a></li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Responsive
                                    Blocks</a></li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Components
                                    Library</a></li>
                            </ul>
                        </div>
                        <div className="">

                            <ul className="flex flex-col max-[470px]:items-center max-[470px]:justify-center gap-6">
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">FAQs</a>
                                </li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Quick
                                    Start</a></li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Documentation</a>
                                </li>
                                <li><a href="javascript:;"
                                    className="text-base font-normal max-lg:text-center text-gray-600 whitespace-nowrap transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">User
                                    Guide</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse gap-5 sm:flex-row items-center first-letter:items-center justify-between pt-7">

                    <ul className="flex items-center gap-9">
                        <li><a href="javascript:;" className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Terms</a></li>
                        <li><a href="javascript:;" className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Privacy</a></li>
                        <li><a href="javascript:;" className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-yellow-800 focus-within:outline-0 focus-within:text-yellow-800">Cookies</a></li>
                    </ul>
                </div>
                <div className="py-7  border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">Juice Hub</a> 2024, All rights reserved.</span>
                        <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                            <a href="javascript:;" className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#33CCFF] hover:bg-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="Social Media">
                                        <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white" />
                                    </g>
                                </svg>
                            </a>
                            <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)]  hover:bg-gradient-to-b from-gray-900 to-gray-900  
                        ">
                                <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766ZM5.132 13.7759C4.43946 13.7444 4.06304 13.6291 3.81289 13.5317C3.48125 13.4027 3.24463 13.249 2.99584 13.0007C2.74705 12.7524 2.59305 12.5161 2.46451 12.1847C2.367 11.9348 2.25164 11.5585 2.22016 10.8664C2.18572 10.1181 2.17885 9.89331 2.17885 7.99752C2.17885 6.10174 2.18629 5.87758 2.22016 5.12866C2.2517 4.43654 2.36791 4.06097 2.46451 3.81035C2.59362 3.47891 2.7474 3.24242 2.99584 2.99379C3.24428 2.74515 3.48068 2.59124 3.81289 2.46278C4.06292 2.36532 4.43946 2.25004 5.132 2.21857C5.88074 2.18416 6.10566 2.17729 8.00173 2.17729C9.89779 2.17729 10.1229 2.18472 10.8723 2.21857C11.5648 2.25009 11.9406 2.36623 12.1914 2.46278C12.5231 2.59124 12.7597 2.74549 13.0085 2.99379C13.2573 3.24208 13.4107 3.47891 13.5398 3.81035C13.6373 4.06023 13.7527 4.43654 13.7841 5.12866C13.8186 5.87758 13.8255 6.10174 13.8255 7.99752C13.8255 9.89331 13.8186 10.1175 13.7841 10.8664C13.7526 11.5585 13.6367 11.9347 13.5398 12.1847C13.4107 12.5161 13.2569 12.7526 13.0085 13.0007C12.76 13.2488 12.5231 13.4027 12.1914 13.5317C11.9414 13.6292 11.5648 13.7444 10.8723 13.7759C10.1236 13.8103 9.89865 13.8172 8.00173 13.8172C6.10481 13.8172 5.88051 13.8103 5.132 13.7759ZM5.07318 0.941429C4.31699 0.975845 3.80027 1.09568 3.34902 1.27116C2.88168 1.45239 2.48605 1.69552 2.09071 2.09C1.69537 2.48447 1.45272 2.88049 1.27139 3.34755C1.0958 3.79882 0.975892 4.31494 0.941455 5.07068C0.90645 5.82761 0.898438 6.0696 0.898438 7.99747C0.898438 9.92534 0.90645 10.1673 0.941455 10.9243C0.975892 11.68 1.0958 12.1961 1.27139 12.6474C1.45272 13.1142 1.69543 13.5106 2.09071 13.9049C2.48599 14.2992 2.88168 14.542 3.34902 14.7238C3.80113 14.8993 4.31699 15.0191 5.07318 15.0535C5.83096 15.0879 6.0727 15.0965 8.00173 15.0965C9.93075 15.0965 10.1729 15.0885 10.9303 15.0535C11.6865 15.0191 12.2029 14.8993 12.6544 14.7238C13.1215 14.542 13.5174 14.2994 13.9127 13.9049C14.3081 13.5105 14.5502 13.1142 14.7321 12.6474C14.9077 12.1961 15.0281 11.68 15.062 10.9243C15.0964 10.1668 15.1044 9.92534 15.1044 7.99747C15.1044 6.0696 15.0964 5.82761 15.062 5.07068C15.0276 4.31489 14.9077 3.79853 14.7321 3.34755C14.5502 2.88077 14.3075 2.4851 13.9127 2.09C13.518 1.69489 13.1215 1.45239 12.655 1.27116C12.2029 1.09568 11.6865 0.975277 10.9308 0.941429C10.1735 0.907013 9.93132 0.898438 8.00229 0.898438C6.07327 0.898438 5.83096 0.906445 5.07318 0.941429Z" fill="white" />
                                </svg>

                            </a>
                            <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 ">
                                <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z" fill="currentColor" />
                                </svg>

                            </a>
                            <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000]  hover:bg-gray-900 ">
                                <svg className="w-[1.25rem] h-[0.875rem] text-white" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9191 1.10651C14.558 1.27906 15.0602 1.78251 15.2299 2.42069C15.5388 3.57887 15.5388 5.99687 15.5388 5.99687C15.5388 5.99687 15.5388 8.41487 15.2299 9.57306C15.0578 10.2136 14.5556 10.7171 13.9191 10.8872C12.7638 11.1969 8.12875 11.1969 8.12875 11.1969C8.12875 11.1969 3.49603 11.1969 2.33844 10.8872C1.69952 10.7147 1.19735 10.2112 1.0276 9.57306C0.71875 8.41487 0.71875 5.99687 0.71875 5.99687C0.71875 5.99687 0.71875 3.57887 1.0276 2.42069C1.1997 1.78015 1.70188 1.27669 2.33844 1.10651C3.49603 0.796875 8.12875 0.796875 8.12875 0.796875C8.12875 0.796875 12.7638 0.796875 13.9191 1.10651ZM10.4981 5.99687L6.6481 8.22578V3.76796L10.4981 5.99687Z" fill="white" />
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
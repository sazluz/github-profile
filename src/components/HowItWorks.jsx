import React from 'react'

const HowItWorks = () => {
  return (
    <div>
    <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                <div className="w-full flex-col justify-start items-center gap-3 flex">
                    <h2 className="w-full text-center text-white text-4xl font-bold font-manrope leading-normal">How It
                        Works</h2>
                    <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">Follow three easy steps to explore GitHub profiles, analyze repository <br></br> data, and discover developer insights.</p>
                </div>
                <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
                    <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3
                                className="self-stretch text-center text-white text-4xl font-extrabold font-manrope leading-normal">
                                1</h3>
                            <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">Enter a GitHub Username</h4>
                        </div>
                        <p className="self-stretch text-center text-white text-base font-normal leading-relaxed">Type a GitHub username into the search bar and start the analysis.</p>
                    </div>
                    <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                            stroke="#0FBF3E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3
                                className="self-stretch text-center text-white text-4xl font-extrabold font-manrope leading-normal">
                                2</h3>
                            <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">
                                Fetch Profile Data</h4>
                        </div>
                        <p className="self-stretch text-center text-white text-base font-normal leading-relaxed">The app collects repositories, languages, contributions, and profile statistics using GitHub data.</p>
                    </div>
                    <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none">
                        <path d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                            stroke="#0FBF3E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
                        <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                            <h3
                                className="self-stretch text-center text-white text-4xl font-extrabold font-manrope leading-normal">
                                3</h3>
                            <h4 className="self-stretch text-center text-white text-xl font-semibold leading-8">Explore Insights</h4>
                        </div>
                        <p className="self-stretch text-center text-white text-base font-normal leading-relaxed">View repository stats, favorite languages, and developer insights in a clean dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
                                            
    </div>
  )
}

export default HowItWorks
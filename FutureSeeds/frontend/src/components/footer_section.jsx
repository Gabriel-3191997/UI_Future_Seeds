import React from 'react';

class FooterSection extends React.Component {
    render() {
        return (
            <>
            <div className="md:mt-32 mt-10">
                <div className="flex flex-wrap justify-center items-center gap-10 mt-16 md:mt-0 text-white  bg-black md:mx-2 mx-0 md:h-[50rem] h-[40rem]">
            
                 <div className="flex flex-wrap justify-center items-center gap-10 mt-10 md:mt-0 mx-4 md:mx-0">
                    <div className="w-full max-w-lg md:w-[32rem]">
                        <h1 className="text-2xl sm:text-3xl font-semibold font-serif capitalize md:text-left">
                            sustainbility
                        </h1>
                        <p className="text-left text-base sm:text-lg font mt-5 font-serif leading-relaxed md:w-md">
                            We promote environmentally responsible farming practices that protect the land and preserve resources for future generations.
                        </p>
                    </div>
                    <div className="w-full max-w-lg md:w-[32rem]">
                         <h1 className="text-2xl sm:text-3xl font-semibold font-serif capitalize md:text-left">
                            community engagement
                        </h1>
                         <p className="text-left text-base sm:text-lg font mt-5 font-serif leading-relaxed md:w-md">
                           We believe strong communities are built when people are equipped with knowledge, opportunities, and support.
                        </p>
                    </div>
                    <div className="w-[calc(100%-2.5rem)] max-w-lg md:max-w-[68rem] mt-5 mx-5">
                        <form action="#" method="post" className="flex flex-col items-start gap-6">
                            <input type="text" name="" id="" className="w-full h-12 bg-transparent border-4 border-white text-gray-500 md:py-8 py-3 px-4 outline-none bg-white rounded" placeholder="john@example.com" />
                            <button type="submit" className="h-12 w-28 border-2 rounded border-white text-white text-xs sm:text-sm uppercase self-start cursor-pointer py-3 md:py-8">
                                subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
                </div>
            </>
        );
    }
}

export default FooterSection;

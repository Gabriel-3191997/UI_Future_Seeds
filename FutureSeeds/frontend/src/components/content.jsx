import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <>
            {/* row 1 */}
            <div className="flex flex-wrap justify-center items-center gap-10 mt-16 md:mt-20 px-4 md:px-0">
                <div className="w-full max-w-lg md:w-[32rem]">
                    <h1 className="text-2xl sm:text-3xl font-semibold font-serif capitalize md:text-left">
                        sustainbility
                    </h1>
                    <p className="text-left text-base sm:text-lg md:w-md font mt-5 font-serif leading-relaxed">
                        We promote environmentally responsible farming practices that protect the land and preserve resources for future generations.
                    </p>
                </div>
                <div className="w-full max-w-lg md:w-[32rem]">
                     <h1 className="text-2xl sm:text-3xl font-semibold font-serif capitalize md:text-left md:w-md">
                        community engagement
                    </h1>
                     <p className="text-left text-base sm:text-lg font mt-5 font-serif leading-relaxed">
                       We believe strong communities are built when people are equipped with knowledge, opportunities, and support.
                    </p>
                </div>
            </div>

            {/* row 2 */}

            <div className="flex flex-wrap justify-center items-center gap-10 mt-16 md:mt-10 px-4 md:px-0">
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
            </div>
            </>
        );
    }
}
export default Content;

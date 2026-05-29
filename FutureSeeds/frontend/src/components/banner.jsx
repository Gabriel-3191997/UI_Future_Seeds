import React from 'react'
import img from '../assets/images/Firefly_Gemini.png'
import img3 from '../assets/images/img3.png'

class Banner extends React.Component{
    state = {
        selectedImage: img,
    }

    showImage = (image) => {
        this.setState({ selectedImage: image })
    }

    render(){
        const { selectedImage } = this.state

        return(
            <>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-28 md:mt-50 px-4 md:px-0">
                {/* div 1 */}
                <div className="w-full max-w-xl bg-white h-72 sm:h-96 md:h-[38rem]">
                    {/* image 1 */}
                    <img src={selectedImage} alt="FutureSeeds selected" className="w-full h-full rounded object-cover" />
                </div>
                {/* div 2 */}
                <div className="w-full max-w-xl flex flex-col gap-4">
                    {/* Gray section at top */}
                    <div className="bg-white flex-col flex md:h-96 h-auto pb-6 md:pb-0">
                        <h1 className="text-left capitalize font-semibold mx-5 font-serif text-2xl sm:text-3xl mt-5">
                            who we are?
                        </h1>
                        <p className="text-base sm:text-lg font-serif mx-2 md:mt-20 mt-8 leading-relaxed">
                            FutureSeeds Community Farmers is committed to empowering communities through sustainable farming, agriculture education, food production, and youth empowerment
                        </p>
                     </div>
                     {/* below columns */}
                    <div className="flex gap-4 h-36 sm:h-50">
                        <div className="flex-1  bg-gray-200 border-0">
                            <button type="button" onClick={() => this.showImage(img)} className="w-full h-full cursor-pointer">
                                <img src={img} alt="FutureSeeds thumbnail 2" className="w-full h-full rounded object-cover" />
                            </button>
                        </div>
                        <div className="flex-1  bg-gray-200 border-0">
                            <button type="button" onClick={() => this.showImage(img3)} className="w-full h-full cursor-pointer">
                                <img src={img3} alt="FutureSeeds thumbnail 3" className="w-full h-full rounded object-cover" />
                            </button>
                        </div>
                        {/* <div className="flex-1  bg-gray-200 border-0"></div> */}
                    </div>
                </div>
             
            </div>
            </>

        )
    }
}

export default Banner

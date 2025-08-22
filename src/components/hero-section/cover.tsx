import Play from "../icons/Play";

const Cover = () => {
    return (
        <div className="relative min-h-[600px] flex items-center overflow-hidden">
            <img src="/cover-1.png" alt="Conver-1" className="absolute inset-0 w-full h-full object-cover"  />
            <div className="relative">
                <div className="lg:ml-[100px] ml-9">
                    <h1 className="lg:w-[600px] sm:w-[700px] leading-[105%] xl:text-7xl lg:text-[56px] text-[40px] font-bold text-white">Digital life for every Indian</h1>
                    <p 
                        className="text-[#FEFEFE] text-[#FEFEFE]/75 font-semibold lg:mt-6 mt-4 lg:max-w-[426px]"
                    >
                        Creatied with google your JioPhone Next is a fully-featured 4G smartphone.
                    </p>

                    <div className="lg:mt-9 mt-6 flex items-center gap-6">
                        <button
                            className="w-32 h-10 leading-[21px] flex items-center justify-center font-bold text-sm py-[15px] px-4 bg-[#2143DB] text-[#FEFEFE] rounded-full"
                        >
                            Get for $49
                        </button>

                        <button className="border border-[#FEFEFE] border-[#FEFEFE]/75 rounded-full leading-[21px] text-sm font-bold flex items-center justify-center gap-2 w-[175px] h-10 px-4 text-[#FEFEFE]">
                            Experience Now <span><Play /></span>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Cover;
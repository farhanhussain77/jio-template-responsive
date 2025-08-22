// import { useState } from "react";
import Header from "../header";
import HeroSection from "../hero-section";
import Recharge from "../icons/Recharge";

const Homepage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            {/* <div className="w-full flex items-center"> */}
                <div className="w-full flex items-center justify-center gap-8 flex-wrap mb-[290px] mt-20">
                    <Recharge />
                    <Recharge />
                    <Recharge />
                    <Recharge />
                    <Recharge />
                </div>
            {/* </div> */}
        </>
    );
};

export default Homepage;
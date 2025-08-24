import { useState } from "react";
import Cart from "../icons/Cart";
import ContactSupport from "../icons/ContactSupport";
import Menu from "../icons/Menu";
import SearchBox from "./SearchBox";
import MobileMenu from "./MobileMenu";
import Navbar from "../navbar";
import ProfileDropdown from "./ProfileDropdown";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="w-full">
                <div className="w-full h-18 bg-main">
                    <div className="px-6 lg:px-10 xl:px-[100px] gap-10 py-4.5 flex justify-between">
                        <div className="flex items-center xl:gap-14 lg:gap-8 gap-6">
                            <div onClick={() => setOpen(true)} className="lg:hidden block">
                                <Menu />
                            </div>
                            <img src="/jio-logo.png" alt="logo" />
                            <Navbar />
                        </div>

                        <div className="flex items-center xl:gap-14 lg:gap-8 gap-6">
                            <SearchBox />
                            <div className="flex items-center gap-2">
                                <span className="hover:bg-[#202E70] py-1 px-2 rounded lg:block hidden"><ContactSupport /></span>
                                <span className="hover:bg-[#202E70] py-1 px-2 rounded lg:block hidden"><Cart /></span>
                                <ProfileDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </>
    )
};

export default Header;
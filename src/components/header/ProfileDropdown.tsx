import { useEffect, useRef, useState } from "react";
import Profile from "../icons/Profile";

const ProfileDropdown = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const onClickProfile = () => {
        setShowDropdown(prev => !prev)
    }

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!(e.target instanceof Node)) return;
            if(dropdownRef.current?.contains(e.target)){
                return;
            }

            setShowDropdown(false);
        }

        document.addEventListener("click", handler);

        return () => {
            document.addEventListener("click", handler);
        }
    },[])

    return (
        <div ref={dropdownRef} className="relative z-20">
            <div 
                onClick={onClickProfile} 
                className="hover:bg-[#202E70] py-1 px-2 rounded"
            >
                <Profile />
            </div>
            <div className={`${showDropdown ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 top-10 right-0 rounded-lg absolute bg-white min-w-[170px]`}>
                <ul className="list-none w-full">
                    <li className="px-1">
                        <p className="rounded text-black font-semibold py-2 px-2">John Smith</p>
                    </li>
                    <li className="border-b border-black/20 my-[2px]"></li>
                    <li className="px-1">
                        <p className="leading-[21px] hover:bg-gray-200 rounded text-black font-semibold py-2 px-2 w-full">Account</p>
                    </li>
                    <li className="px-1">
                        <p className="hover:bg-gray-200 rounded text-black font-semibold py-2 px-2 w-full">Billing</p>
                    </li>
                    <li className="px-1">
                        <p className="hover:bg-gray-200 rounded text-black font-semibold py-2 px-2 w-full">Settings</p>
                    </li>
                    <li className="border-b border-black/20 mt-[2px]"></li>
                    <li className="px-1 my-[2px]">
                        <p className="hover:bg-gray-200 rounded text-black font-semibold py-2 px-2 w-full">Logout</p>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default ProfileDropdown;
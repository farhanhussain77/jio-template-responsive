const Navbar = () => {
    return (
        <div className="lg:block hidden">
            <ul className="flex gap-2">
                <li className="rounded hover:bg-[#202E70] py-1 px-3 text-white list-none">Mobile</li>
                <li className="rounded hover:bg-[#202E70] py-1 px-3 text-white list-none">JioFiber</li>
                <li className="rounded hover:bg-[#202E70] py-1 px-3 text-white list-none">Business</li>
                <li className="rounded hover:bg-[#202E70] py-1 px-3 text-white list-none">Shop</li>
                <li className="rounded hover:bg-[#202E70] py-1 px-3 text-white list-none">Apps</li>
            </ul>
        </div>
    )
};

export default Navbar;
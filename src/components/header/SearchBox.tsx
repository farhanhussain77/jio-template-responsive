import Search from "../icons/Search";

const SearchBox = () => {
    return (
        <div className="relative">
            <span className="absolute top-1/2 -translate-y-1/2 left-4"><Search /></span>
            <input
                name="search"
                placeholder="Search" 
                className="placeholder:text-white text-white min-h-9 pb-[1px] rounded-full pl-12 pr-4 bg-blue-dark" 
            />
        </div>
    )
};

export default SearchBox;
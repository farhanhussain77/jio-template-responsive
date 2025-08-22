const MobileMenu = ({open, onClose}:{open: boolean, onClose: () => void}) => {
    const slideInClass = open ? 'translate-x-0' : `-translate-x-full`;
    return (
        <>
            <div className={`px-4 py-4 bg-white shadow-xs absolute top-0 z-20 min-h-screen h-full w-[300px] transition-all duration-300 ease-out ${open ? 'translate-x-0' : '-translate-x-[300px]'}`}>
                <div className="flex items-center justify-between">
                    <img src="/jio-logo.png" />
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-6 h-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                        onClick={onClose}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div
                onClick={onClose} 
                className={`${slideInClass} transition-all duration-500 ease-[cubic-bezier(0.25,1,0.9,0.9)] absolute inset-0 w-full h-full bg-black opacity-10 z-10`} 
            />
        </>
    )
};

export default MobileMenu;
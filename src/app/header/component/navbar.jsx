
export default function Navbar (){
    return(
        <navbar className="w-[100%] h-[60%] flex flex-wrap justify-center items-center">
        <ul className="clickMenu w-[100%] md:w-[60%] h-[100%] text-white uppercase text-[1.5rem] md:text-[1rem] flex justify-center md:justify-end items-center">
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                home
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                shop
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                testimonials
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                about
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                contact
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                add panel
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                <i className="bi bi-basket3-fill text-[1.5rem]"></i>
            </li>

        </ul>
        <ul className="w-[100%] md:w-[40%] h-[100%] text-white uppercase text-[1.5rem] md:text-[1rem] flex justify-center md:justify-start items-center">
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                sign up
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">
                login
            </li>
            <li className="h-[100%] flex items-center px-3 cursor-pointer">

            </li>
        </ul>
    </navbar>
    )
}

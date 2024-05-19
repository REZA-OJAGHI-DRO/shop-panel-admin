const { headers } = require("next/headers");
import Navbar from './component/navbar'

export default function Header(){
    return(
        <header>
            <Navbar/>
        </header>
    )
}
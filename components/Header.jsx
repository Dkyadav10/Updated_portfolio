import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header id="header" className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/* LOGO */}
            <Link href= "/">
                <h1 className = "text-4xl font-semibold text-[#00ff99]">
                    Dharmendra Kumar Yadav
                </h1>
            </Link>

            {/* desktop navbar and hire me buttton */}
            <div className = "hidden xl:flex items-center gap-8">
                <Navbar />
                <Link href= "/contact">
                    <Button className = "cursor-pointer">Hire me</Button>
                </Link>
            </div>

            {/* mobile Navbar */}
            <div className = "xl:hidden">mobile nav</div>


        </div>
    </header>
  )
};

export default Header;
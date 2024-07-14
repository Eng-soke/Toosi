
import { useState } from "react"
function Header(){

    const [menu, setMenu]= useState(false)

    const handleMenu =()=>{
        setMenu(true)

    }

    const handleClose =()=>{
        setMenu(false)
    }





    return <div className="bg-primary  h-screen sm:py-12 sm:px-32 py-5 px-5">

        <div className="bg-white py-2 sm:rounded-full rounded-3xl sm:flex justify-between  items-center ">
            <div>

           <h1 className="text-2xl text-orange-500 pl-5">TOOSI</h1>
           <h6 className="font-light pl-5">COMMUNITY</h6>
            </div>
            <ul style={{display: menu == true ? "block" : ""}} className="sm:flex  gap-10 font-bold text-xl pr-10 text-orange-500 pl-5 sm:pl-0  hidden">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
            </ul>
            <button  style={{display: menu == true ? "block" : ""}} className="bg-orange-500 ml-5 sm:ml-0 mt-5 hidden sm:flex sm:mt-0 rounded px-5 sm:rounded-3xl sm:px-10 sm:py-3 sm:mr-10 text-white"  >Join here</button>
            <i  style={{display: menu == true ? "none" : ""}} onClick={handleMenu} class="text-5xl absolute right-6 top-8 sm:hidden  fa-solid fa-bars"></i>

            <i style={{display: menu == true ? "block" : ""}} onClick={handleClose}  class="text-5xl absolute right-6 top-8 hidden fa-solid fa-xmark"></i>
        
        </div>
 

        <div className="text-orange-500 pt-16  ">
            <h1 className="sm:text-6xl text-4xl font-bold ">Welcome To Toosi</h1>
            <h1  className="sm:text-6xl text-4xl font-bold pt-6" >Community!</h1>
            <h1 className="pt-7 font-bold  ">Empowring Innovators, Fostering Enterprenuership</h1>
            <button className="bg-white rounded-3xl sm:px-20 px-5  text-3xl font-bold py-3 mt-12 ">Join The Community</button>
        </div>


         

    </div>
}
export default Header
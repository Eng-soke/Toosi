
function Footer() {
    return <div className="bg-blue-950 sm:h-[210px] h-screen">

        <div className="sm:flex justify-center sm:pl-0 pl-5 gap-32">

            <div className="">
                <p className="text-white sm:pt-0 pt-5 text-2xl">FOLLOW US</p>
                <div className="flex pt-2">

                    <i class="fa-brands fa-facebook text-orange-600 text-3xl mt-10"></i>
                    <h1 className="text-xl text-white pl-2  mt-11">Facebook</h1>
                </div>

                <div className="flex pt-2" >
                <i class="fa-brands fa-twitter text-orange-600 text-3xl"></i>
                    <h1 className="text-xl text-white pl-2">Twitter</h1>
                </div>

                <div className="flex pt-2 " >
                <i class="fa-brands fa-instagram text-orange-600 text-3xl"></i>
                    <h1 className="text-xl text-white pl-2">Instgram</h1>
                </div>
            </div>
            <div className="">
                <p className="text-white text-2xl  sm:pt-0 pt-10">Contact Us</p>
                <div className="flex pt-2">

                <i class="fa-solid fa-phone text-orange-600 text-3xl mt-10"></i>
                    <h1 className="text-xl text-white  mt-11">+252 626739858</h1>
                </div>

                <div className="flex pt-2" >
                <i class="fa-solid fa-message text-orange-600 text-3xl"></i>
                    <h1 className="text-xl text-white pl-1">hello@toosicommunity.org</h1>
                </div>

                <div className="flex pt-2" >
                <i class="fa-solid fa-person-dress text-orange-600 text-3xl"></i>
                    <h1 className="text-xl text-white pl-1">KM4, Taleh Road, Muqdisho</h1>
                </div>
            </div>
            <div className="">
                <p className="text-white text-2xl">Join The Community</p>
                <button className="bg-orange-500 py-3 mt-10 px-20">Join Here</button>
            </div>

        </div>

    </div>

}
export default Footer
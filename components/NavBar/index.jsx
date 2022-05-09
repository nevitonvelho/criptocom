

export default function NavBar(){
    return(<>
        <div className="bg-regal-branco text-sm font-semibold py-2 px-6" >
            <h1 className="text-[#000814]">Criptomoedas:  <a className="text-blue-600">17.035</a></h1>
        </div>


        <div className='flex justify-between items-center flex-wrap py-2 px-6 '>
            <img src="/logo.svg" alt="sfd" className='w-32' />

            <div className="flex items-center flex-wrap ">
            <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Subscrever
            </button> 
            </div>
        </div>
    
    </>
    )
}
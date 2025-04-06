import Link from "next/link";

const Anatomical = () => {
    return ( 
        <div className='flex flex-col min-h-screen justify-center items-center'>
            <div className='text-5xl border-b mb-5'>Anatomical</div>
            <Link href={'/'} className="relative inline-block p-px font-semibold leading-6 text-[#f5d9d5] bg-[#630185] shadow-xs cursor-pointer rounded-xl shadow-[#630185] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group">
          <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-3 py-1 rounded-xl bg-[#630185]">
          <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all duration-500  ">Back</span>
          </div>
          </span>
          </Link>

            <div className='text-3xl mt-10'>Benefits</div>
            
        </div>
     );
}
 
export default Anatomical;
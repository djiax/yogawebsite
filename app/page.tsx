import Link from "next/link";


export default function Home() {
  return (
    <div>
    <div className='flex flex-col min-h-[77vh] justify-center items-center px-55'>
      <div className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#f45899] to-[#654ea3]'>Ascension in Body</div>
      <div className='border-b mt-5'>A Guide to Unlocking Your Essence</div>
      </div>



    <div className='flex flex-col min-h-screen justify-center items-center px-55'>


      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='text-4xl border rounded-xl p-3'>The Nature of Yoga</div>
        <div className='text-center mt-8'>It is but a sacred communion between one&apos;s being and mind. To transcend one&apos;s physical limitations and reach the infinite plains of existence within.</div>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <div className='mt-12 text-3xl border-b'>Dimension of Yoga</div>
        <div className='text-center mt-5'>The many forms of the art strive to promote one&apos;s overall wellbeing based their own values.</div>
        <div className='text-3xl mt-10 mb-10'>Choose Your Path</div>
        <div className='flex gap-5'>

          
          <Link href={'/physical'} className="relative inline-block p-px font-semibold leading-6 text-[#f5d9d5] bg-[#630185] shadow-xs cursor-pointer rounded-xl shadow-[#630185] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group">
          <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#630185]">
          <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all duration-500 ">Physical</span>
          </div>
          </span>
          </Link>


          <Link href={'/anatomical'} className="relative inline-block p-px font-semibold leading-6 text-[#f5d9d5] bg-[#630185] shadow-xs cursor-pointer rounded-xl shadow-[#630185] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group">
          <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#630185]">
          <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all duration-500 ">Anatomical</span>
          </div>
          </span>
          </Link>

          
          <Link href={'/spiritual'} className="relative inline-block p-px font-semibold leading-6 text-[#f5d9d5] bg-[#630185] shadow-xs cursor-pointer rounded-xl shadow-[#630185] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group">
          <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#630185]">
          <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all duration-500 ">Spiritual</span>
          </div>
          </span>
          </Link>

          <Link href={'/emotional'} className="relative inline-block p-px font-semibold leading-6 text-[#f5d9d5] bg-[#630185] shadow-xs cursor-pointer rounded-xl shadow-[#630185] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 group">
          <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span className="relative z-10 block px-6 py-3 rounded-xl bg-[#630185]">
          <div className="relative z-10 flex items-center space-x-2">
          <span className="transition-all duration-500 ">Emotional</span>
          </div>
          </span>
          </Link>
        </div>  
      </div>
    </div>
    </div>
  );
}

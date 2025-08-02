import iphone from '../assets/image/iphone.jpg';
import secondVideo_lap from '../assets/image/video-2.mp4';
import thirdVideo_lap from '../assets/image/video_ipad.mp4';
import watch_img from '../assets/image/watch.jpg';
import mac_img from '../assets/image/mac.jpg';
import airpods_img from '../assets/image/airpods.jpg';
import macbook_img from '../assets/image/macbook.jpg';
import phone_video from '../assets/image/video_1.mp4'


function Categories() {
   return (
      <>
         {/*------------------iphone---------------------------*/}
         <div className="md:hidden flex justify-center items-center bg-gray-100 pt-[20px]">
            <div className="text-center p-4 bg-gray-100">
               <h1 className="text-4xl font-semibold">iPhone</h1>
               <p className="pt-[15px] text-xl text-gray-900">Meet the iPhone 16 family.</p>
               <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[31vw] mr-[15px] rounded-full mt-4">Learn more</button>
               <button className="border-2 border-blue-700 text-blue-700 p-[7px] h-[6vh] w-[31vw] rounded-full mt-4">Shop iPhone</button>
               <p className="text-[18px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
                  Built for Apple Intelligence.</p>
               <img src={iphone} alt="Logo" className="h-[35vh] mt-[10px]"></img>
            </div>
         </div>
         {/*---------------------mac book air second_video_mobile---------------------------*/}
         <div className="md:hidden flex justify-center items-center pt-[20px] mt-4 pb-3 bg-gradient-to-b from-sky-100 to-gray-100">
            <div className="text-center p-4">
               <h1 className="text-4xl font-semibold">MacBook Air</h1>
               <p className="pt-[15px] text-xl text-gray-900">Sky blue colour. <br></br> Sky high performance with M4.</p>
               <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[31vw] mr-[15px] rounded-full mt-4">Learn more</button>
               <button className="border-2 border-blue-700 text-blue-700 p-[7px] h-[6vh] w-[20vw] rounded-full mt-4 mb-2">Buy</button>
               <video className=' w-full object-cover  mx-auto pt-3' src={secondVideo_lap} autoPlay muted loop preload="auto"
                  playsInline></video>
               <p className="text-[18px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
                  Built for Apple Intelligence.</p>
            </div>
         </div>
         {/*------------------third video mobile---------------------------*/}
         <div className="md:hidden flex justify-center items-center pt-[20px] mt-4 pb-3 bg-black">
            <div className="text-center p-4 shadow-2xl">
               <h1 className="text-4xl text-white font-semibold">iPad Pro</h1>
               <p className="pt-[15px] text-xl text-white">Unbelievably thin. Incredibly powerful.</p>
               <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[31vw] mr-[15px] rounded-full mt-4">Learn more</button>
               <button className="border-2 border-blue-700 text-blue-700 p-[7px] h-[6vh] w-[20vw] rounded-full mt-4 mb-2">Buy</button>
               <video className=' w-full object-cover  mx-auto pt-3' src={thirdVideo_lap} autoPlay muted loop preload="auto"
                  playsInline></video>
               <p className="text-[18px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
                  Built for Apple Intelligence.</p>
            </div>
         </div>
         {/*------------------watch img---------------------------*/}
         <div className="md:hidden flex justify-center items-center bg-white mt-[20px]">
            <div className="text-center bg-white shadow-xl">
               <h1 className="text-3xl font-bold pt-[30px]">WATCH</h1>
               <p className="text-[15px] font-bold">SERIES 10</p>
               <p className="pt-[10px] text-xl text-gray-900">Thinstant classic.</p>
               <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[31vw] mr-[15px] rounded-full mt-4">Learn more</button>
               <button className="border-2 border-blue-800 text-blue-700 p-[7px] h-[6vh] w-[20vw] rounded-full mt-4">Buy</button>
               <img src={watch_img} alt="watch_img" className="h-[58vh] w-full mt-[10px]"></img>
            </div>
         </div>
         {/*------------------mac_img---------------------------*/}
         <div className="md:hidden flex justify-center items-center bg-white pt-[40px]">
            <div className="text-center bg-white relative">
               <img src={mac_img} alt="mac_img" className="w-auto mt-[10px]"></img>
               <button className="bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2
                text-black p-[7px] h-[6vh] w-[31vw] mr-[15px] rounded-full mt-4">Learn more</button>
            </div>
         </div>
         {/*--------------------------airpods img--------------------------*/}
         <div className="md:hidden flex justify-center items-center bg-white pt-[20px]">
            <div className="relative text-center w-full">
               {/* Image as background */}
               <img src={airpods_img} alt="" className="w-[100vw] h-[70vh] object-cover" />

               {/* Content over image */}
               <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
                  <h1 className="text-4xl font-semibold drop-shadow-[3px_3px_0px_rgb(30,64,175)]">AirPods 4</h1>
                  <p className="pt-[15px] text-xl text-center drop-shadow-[3px_3px_0px_rgb(30,64,175)]">
                     Iconic. Now supersonic.<br />
                     Available with Active Noise <br />
                     Cancellation.
                  </p>

                  <div className="flex gap-4 mt-4">
                     <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[31vw] rounded-full">Learn more</button>
                     <button className="border-2 border-blue-800 text-blue-700 p-[7px] h-[6vh] w-[20vw] rounded-full">Buy</button>
                  </div>
               </div>
            </div>
         </div>
         {/*------------------macbook pro img---------------------------*/}
         <div className="md:hidden flex justify-center items-center pt-[20px] mt-4 pb-3 bg-black">
            <div className="text-center p-4">
               <h1 className="text-4xl font-semibold text-white">MacBook Pro</h1>
               <p className="pt-[15px] text-xl text-white ">A work of smart.</p>
               <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[31vw] mr-[15px] rounded-full mt-4">Learn more</button>
               <button className="border-2 border-blue-600 text-blue-600 p-[7px] h-[6vh] w-[20vw] rounded-full mt-4 mb-2">Buy</button>
               <img src={macbook_img} alt="macbook" className="w-[80vw] mt-[10px]"></img>
               <p className="text-[18px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
                  Built for Apple Intelligence.</p>
            </div>
         </div>
         {/*------------------phone video---------------------------*/}
         <div className="md:hidden flex justify-center items-center pt-[20px] mt-4 bg-gray-100 pb-[40px]">
            <div className="text-center">
               <h1 className="text-4xl font-semibold">Trade In</h1>
               <p className="pt-[15px] text-xl text-gray-900">Upgrade and save.It's that easy.</p>
               <button className="bg-blue-700 text-white p-[7px] h-[6vh] w-[47vw] mr-[15px] rounded-full mt-4">
                   Get your estimate</button>
               <video className=' w-full object-cover  mx-auto pt-8' src={phone_video} autoPlay muted loop preload="auto"
                  playsInline></video>
            </div>
         </div>

{/*------------------Laptop view---------------------------*/}
{/* Laptop/Desktop View Only */}
<div className="hidden md:block bg-white p-10 space-y-4">

   {/* iPhone Full Width */}
   <div className="bg-gray-100 text-center p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-semibold">iPhone</h1>
      <p className="pt-4 text-xl text-gray-900">Meet the iPhone 16 family.</p>
      <div className="mt-4 flex justify-center gap-4">
         <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-full">Learn more</button>
         <button className="border-2 border-blue-700 hover:bg-black hover:text-white text-blue-700 px-6 py-2 rounded-full">Shop iPhone</button>
      </div>
      <p className="text-[23px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
         Built for Apple Intelligence.
      </p>
      <img src={iphone} alt="iphone" className="w-[20vw] mx-auto mt-4 object-contain" />
   </div>

   {/* MacBook Air Full Width */}
   <div className="bg-black text-center p-6 rounded-lg shadow-md">
      <h1 className="text-7xl font-semibold text-white">MacBook Air</h1>
      <p className="pt-4 text-2xl text-white">Sky blue colour. <br />Sky high performance with M4.</p>
      <div className="mt-8 flex justify-center gap-4">
         <button className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-2 rounded-full">Learn more</button>
         <button className="border-2 border-blue-700 hover:bg-white hover:text-black text-blue-700 px-6 py-2 rounded-full">Buy</button>
      </div>
       <p className="text-[23px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
         Built for Apple Intelligence.
      </p>
      <video className="w-full mt-4 rounded-md" src={secondVideo_lap} autoPlay muted loop playsInline preload="auto" />
   </div>

   {/* Remaining 6 in Grid: iPad, Watch, MacImg, AirPods, MacBook Pro, Trade In */}
   <div className="grid grid-cols-2 gap-6">
      {/* iPad Pro */}
      <div className="bg-black text-center p-6 rounded-lg shadow-md mt-[30px]">
         <h1 className="text-4xl font-semibold text-white">iPad Pro</h1>
         <p className="pt-4 text-xl text-white">Unbelievably thin. Incredibly powerful.</p>
         <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-full">Learn more</button>
            <button className="border-2 border-blue-700 hover:bg-white hover:text-black text-blue-700 px-6 py-2 rounded-full">Buy</button>
         </div>
         <video className="w-full mt-4 rounded-md" src={thirdVideo_lap} autoPlay muted loop playsInline preload="auto" />
         <p className="text-[20px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
            Built for Apple Intelligence.
         </p>
      </div>

      {/* Watch */}
      <div className="bg-white text-center p-6 rounded-lg shadow-2xl mt-[30px]">
         <h1 className="text-3xl font-bold">WATCH</h1>
         <p className="text-[15px] font-bold">SERIES 10</p>
         <p className="pt-2 text-xl text-gray-900">Thinstant classic.</p>
         <div className="mt-4 flex justify-center gap-4">
            <button className="bg-black hover:bg-gray-600 text-white px-6 py-2 rounded-full">Learn more</button>
            <button className="border-2 border-blue-800 hover:bg-black hover:text-white text-blue-700 px-6 py-2 rounded-full">Buy</button>
         </div>
         <img src={watch_img} alt="watch" className="w-auto mx-auto mt-4 object-contain" />
      </div>

      {/* Mac Image */}
      <div className="relative text-center rounded-xl shadow-md">
         <img src={mac_img} alt="mac" className="w-full mx-auto object-contain"/>
         <button className="bg-white  hover:bg-black hover:text-white absolute bottom-12 left-1/2 transform -translate-x-1/2 text-black px-6 py-2 rounded-full border border-black">
            Learn more
         </button>
      </div>

      {/* AirPods */}
      <div className="relative bg-black text-center p-6 rounded-lg shadow-md">
         <img src={airpods_img} alt="airpods" className="w-full h-[100vh] object-cover rounded-lg" />
         <div className="absolute top-10 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl font-semibold drop-shadow-[3px_3px_0px_rgb(30,64,175)]">AirPods 4</h1>
            <p className="pt-4 text-xl drop-shadow-[3px_3px_0px_rgb(30,64,175)]">
               Iconic. Now supersonic.<br />
               With Active Noise Cancellation.
            </p>
            <div className="flex gap-4 mt-4">
               <button className="bg-blue-700 hover:bg-white hover:text-black text-white px-6 py-2 rounded-full">Learn more</button>
               <button className="border-2 border-blue-800 hover:bg-black hover:text-white text-blue-700 px-6 py-2 rounded-full">Buy</button>
            </div>
         </div>
      </div>

      {/* MacBook Pro */}
      <div className="bg-black text-center p-6 rounded-lg shadow-md">
         <h1 className="text-4xl font-semibold text-white">MacBook Pro</h1>
         <p className="pt-4 text-xl text-white">A work of smart.</p>
         <div className="mt-4 flex justify-center gap-4">
            <button className="bg-blue-700 hover:bg-white hover:text-black text-white px-6 py-2 rounded-full">Learn more</button>
            <button className="border-2 border-blue-600 hover:bg-black hover:text-white text-blue-600 px-6 py-2 rounded-full">Buy</button>
         </div>
         <img src={macbook_img} alt="macbook" className="h-[60vh] mx-auto mt-4 object-contain" />
         <p className="text-[20px] mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
            Built for Apple Intelligence.
         </p>
      </div>

      {/* Trade In */}
      <div className="bg-gray-100 text-center p-6 rounded-lg shadow-md">
         <h1 className="text-4xl font-semibold">Trade In</h1>
         <p className="pt-4 text-xl text-gray-900">Upgrade and save. It's that easy.</p>
         <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 mt-4 rounded-full">Get your estimate</button>
         <video className="w-full mt-[55px] rounded-md" src={phone_video} autoPlay muted loop playsInline preload="auto" />
      </div>
   </div>
</div>

      </>
   )
}

export default Categories;
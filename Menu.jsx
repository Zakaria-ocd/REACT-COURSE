export default function Menu() {
  return (
    <>
      <div className=" w-full  flex items-center">
        <div className="w-[30%]  h-20 flex items-center pl-3 relative">
          <input
            className="pl-14  h-11 outline-none border-sky-500  focus:border-2 hover: hover:rounded-md  focus:rounded-md"
            type="text"
            placeholder="Search for..."
          />
          <i className="absolute text-[1.2rem] text-sky-500 ml-4 fa-regular fa-magnifying-glass"></i>
        </div>
        <div className="w-[70%] pr-8 space-x-12 justify-end bg--800 h-16 flex items-center pl-3 ">
          <div className="relative ">
            <i className="fa-bars fa-regular text-2xl text-cyan-600"></i>
            <p className="flex items-center justify-center absolute -mt-[40px] ml-5 bg-cyan-600 rounded-full w-5 h-4 text-xs font-semibold text-white ">
              6
            </p>
          </div>
          <div className="relative">
            <i className="fa-bell fa-light text-2xl text-cyan-600"></i>
            <p className="flex items-center justify-center absolute -mt-[40px] ml-5 bg-cyan-600 rounded-full w-5 h-4 text-xs font-semibold text-white ">
              11
            </p>
          </div>
          <div className="relative">
            <i className="fa-light fa-envelope text-2xl text-cyan-600"></i>
            <p className="flex items-center justify-center absolute -mt-[40px] ml-5 bg-cyan-600 rounded-full w-5 h-4 text-xs font-semibold text-white ">
              9
            </p>
          </div>
          <div className="relative">
            <i className="fa-solid fa-user text-[17px] w-8 h-8 flex items-center justify-center border-2 border-cyan-600 rounded-full text-cyan-600"></i>
            <i className="flex fa-solid fa-angle-down items-center justify-center absolute -mt-[10px] ml-5 bg-cyan-600 rounded-full w-4 h-3 text-xs font-semibold text-white ">
              
            </i>
          </div>
          <div className="relative">
            <i className="fa-light fa-grid text-2xl text-cyan-600"></i>
           
          </div>
        </div>
      </div>
    </>
  );
}

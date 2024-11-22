import Menu from "./Menu";


export default function Header() {
  return (
    <div className="w-full h-[72px] shadow-lg flex ">
      <div className="w-1/5  bg-purple-500 flex px-5 justify-between items-center">
        <img src="./../public/vite.svg" alt="" />
        <i className="fa-thin fa-bars text-white text-3xl"></i>
      </div>
      <div className="w-4/5  flex items-center">
      <Menu></Menu>
      </div>
    </div>
  );
}

import logo from "../assets/logo-text.png";

const Naveber = () => {
  return (
    <div className="mt-3 sticky top-0 z-50 bg-white p-2">
  <div className="flex justify-between container m-auto items-center">
    <div>
      <img src={logo} alt=" logo " />
    </div>
    <div className="flex">
      <ul className="flex gap-6 text-[#475569] px-2 m-2">
        <li className="text-[#DB2777]">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div className="flex items-center">
      {/* right button */}
      <button className="text-[#334155]">Sign In</button>
      {/* left button */}
      <button className="bg-[#D91B7E] text-white px-5 py-2 rounded-full font-medium mx-4">
        Sign Up
      </button>
    </div>
  </div>
</div>
  );
};

export default Naveber;

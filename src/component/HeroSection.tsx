import banner from "../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div>
      <div className=" flex mx-auto container justify-between">
        <div className=" mt-40 ">
          <h2 className=" text-[50px] font-bold ">Build Your Ideal</h2>
          <h2 className="  bg-linear-to-r from-[#ff2a00] via-[#8944dd] to-[#8438E4] bg-clip-text text-transparent font-bold text-5xl">Development Stack</h2>
          <div className="mt-7 text-[#475569]">
          <p>Explore frontend, backend, database, and tooling options,</p>
          <p>compare them side by side, and put together the stack that fits your</p>
          <p>next project.</p>
          </div>
            
          

          {/* button section  */}
          <div className="mt-16 gap-2 " >
            <button className="bg-linear-to-r from-[#FF6B00] via-[#F84352] to-[#E83C8D] text-white px-2 py-2 rounded-[8px] font-semibold text-lg shadow-sm" > Explore Technologies </button>
            <button className="mx-2 border border-[#E2E8F0] text-[#374151] bg-white px-10 py-2 rounded-[8px] font-small text-lg hover:bg-gray-50 transition-all" > Learn More </button>
          </div>
        </div>
        <div className="mt-13" >
          <img src={banner} alt="banner-stack" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

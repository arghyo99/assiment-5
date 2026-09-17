import banner from "../assets/banner-stack.png"

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row mx-auto container justify-between items-center px-4">
        

        <div className="mt-10 md:mt-40 text-center md:text-left">
          <h2 className="text-4xl md:text-[50px] font-bold">Build Your Ideal</h2>
          <h2 className="bg-linear-to-r from-[#ff2a00] via-[#8944dd] to-[#8438E4] bg-clip-text text-transparent font-bold text-4xl md:text-5xl">
            Development Stack
          </h2>
          <div className="mt-7 text-[#475569]">
            <p>Explore frontend, backend, database, and tooling options,</p>
            <p>compare them side by side, and put together the stack that fits your</p>
            <p>next project.</p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="bg-linear-to-r from-[#FF6B00] via-[#F84352] to-[#E83C8D] text-white px-6 py-2 rounded-[8px] font-semibold text-lg shadow-sm">
              Explore Technologies
            </button>
            <button className="border border-[#E2E8F0] text-[#374151] bg-white px-10 py-2 rounded-[8px] text-lg hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner */}
        <div className="mt-10 md:mt-13">
          <img src={banner} alt="banner-stack" className="w-full max-w-sm md:max-w-full" />
        </div>

      </div>
    </div>
  )
}

export default HeroSection
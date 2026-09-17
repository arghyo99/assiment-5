import Logo from '../assets/logo-text.png'

const Footer = () => {
  return (
    <div className="bg-white border-t border-gray-100 mt-20">


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">


          <div className="col-span-2 md:col-span-1">
            <img src={Logo} alt="logo" className="h-8" />
            <p className="text-[#475569] text-sm mt-4 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-[#475569] text-sm font-semibold hover:text-[#D91B7E] transition-colors">GitHub</a>
              <a href="#" className="text-[#475569] text-sm font-semibold hover:text-[#D91B7E] transition-colors">Twitter</a>
              <a href="#" className="text-[#475569] text-sm font-semibold hover:text-[#D91B7E] transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-[#0F172A] font-semibold text-sm tracking-wide">PRODUCT</h3>
            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Home</a>
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Technologies</a>
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Projects</a>
            </div>
          </div>


          <div>
            <h3 className="text-[#0F172A] font-semibold text-sm tracking-wide">COMPANY</h3>
            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">About</a>
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Contact</a>
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Careers</a>
            </div>
          </div>


          <div>
            <h3 className="text-[#0F172A] font-semibold text-sm tracking-wide">LEGAL</h3>
            <div className="flex flex-col gap-3 mt-4">
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#475569] text-sm hover:text-[#D91B7E] transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>


      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#94A3B8] text-sm">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-[#94A3B8] text-sm hover:text-[#D91B7E] transition-colors">Privacy</a>
            <a href="#" className="text-[#94A3B8] text-sm hover:text-[#D91B7E] transition-colors">Terms</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
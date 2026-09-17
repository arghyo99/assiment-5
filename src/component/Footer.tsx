import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className='flex mx-auto container  justify-between mt-20' >
                <div>
                    <img src={Logo} alt="logo" />
                    <div className=' mt-5 mb-5' >
                    <p className='text-[#475569] font-small ' >Curated tools, technologies, and resources for developers building</p>
                    <p className='text-[#475569] font-small'>modern software.</p></div>
                    <div className='flex gap-4 text-[#475569] font-semibold' >
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>

                </div>
                <div>
                    <h3 className='text-[#0F172A] font-semibold' >PRODUCT</h3>
                    <div className='flex flex-col gap-3.5 mt-4.5 text-[#475569]' >
                    <a href="#">Home</a>
                    <a href="#">Technologies</a>
                    <a href="#">Projects</a>
                    </div>
                </div>
                <div>
                    <h3 className='text-[#0F172A] font-semibold' >COMPANY</h3>
                    <div className='flex flex-col gap-3.5 mt-4.5 text-[#475569]' >
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Careers</a></div>

                </div>
                <div className='text-left'>
                    <h3 className='text-[#0F172A] font-semibold'>LEGAL</h3>
                    <div className='flex flex-col gap-3.5 mt-4.5 text-[#475569]' >
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    </div>
                    
                </div>
                 </div>
                 <hr className='container text-[#ebe8e8] mx-auto mt-20  ' />

                 <div className='mx-auto justify-between flex container mt-10'>
                    <div>
                        <p className='text-[#94A3B8]' >© 2026 Dev Stack. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5 mb-15'>
                        <p className='text-[#94A3B8]' >Privacy</p>
                        <p className='text-[#94A3B8]' >Terms</p>
                    </div>
                </div>

            
        </div>
        





        
    );
};

export default Footer;
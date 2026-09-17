import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className='flex mx-auto container  justify-between mt-20' >
                <div>
                    <img src={Logo} alt="logo" />
                    <p>Curated tools, technologies, and resources for developers building</p>
                    <p>modern software.</p>
                    <div>
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>

                </div>
                <div>
                    <h3>PRODUCT</h3>
                    <a href="#">Home</a>
                    <a href="#">Technologies</a>
                    <a href="#">Projects</a>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Careers</a>

                </div>
                <div>
                    <h3>LEGAL</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    
                </div>


                 </div>

            
        </div>





        
    );
};

export default Footer;
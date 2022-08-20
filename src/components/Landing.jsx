import React from 'react'
import logo from'./assets/DShacklogo.svg' 
const Landing = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
     
      <div className='h-[100vh] w-[100vw]'>
           <div className='logo h-[50%] flex justify-center mt-20'>
               <img src={logo} alt="" className='w-[50%]'/>
           </div>
           <div className="text h-[20%] flex justify-center ">
              <div className='text-left w-[70%] text-white text-[1.5vmax]'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, necessitatibus delectus. Cupiditate, minus. Et dolores nesciunt aperiam, repellendus aspernatur illum itaque soluta voluptas ex ipsam doloribus aliquam error mollitia porro.</div>
           </div>
      {/* <div
        className="apply-button"
        data-hackathon-slug="dshack"
        data-button-theme="light"
        style="height: 44px; width: 312px"
      ></div> */}
      </div>
     
  )
}

export default Landing
import React from 'react';
import logo from './assets/DShacklogo.svg';

const Landing = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-[80vh] md:h-[90vh] w-[100vw]">
      <div className="logo h-[60%] flex justify-center mt-10">
        <img src={logo} alt="" className="w-[50%]" />
      </div>
      <div className="text flex flex-col items-center justify-center ">
        <div
          className="apply-button"
          data-hackathon-slug="dshack"
          data-button-theme="light"
          style={{ height: '44px', width: '312px' }}
        >
          Apply with Devfolio
        </div>
        <div className="text-left w-[70%] text-white text-[2vmax] md:text-[1.3vmax] mt-16">
          {' '}
          &apos; We cannot solve our problems with the same THINKING we used
          when we created them&apos;
          <br /> - Albert Einstein.
          <br />
          The Data Science Community comes forth with the hackathon event that
          strives to bring out innovation. An extensive 3-rounds hackathon that
          will provide an opportunity for hackers to shape their ideas into
          reality
        </div>
      </div>
    </div>
  );
};

export default Landing;

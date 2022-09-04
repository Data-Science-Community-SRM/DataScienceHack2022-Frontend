import React from 'react'

const Results = () => {
  return (
    <div className='bg-white bg-opacity-50 backdrop-blur-md rounded-lg p-8 my-8 max-w-md m-auto'>
      <h1 className='text-3xl md:text-5xl text-[#B200CF] font-bold text-center'>
        Projects Selected for Round 3
      </h1>
      <div className='border-collapse'>


        <ul className='p-3 grid grid-cols-1 grid-rows-[15] list-disc font-semibold'>
          <li>Sarv Swasthya</li>
          <li>jigyasu-frontend</li>
          <li>iot based driver detection</li>
          <li>SuperStream</li>
          <li>AiroaGuard</li>
          <li>Aid for life</li>
          <li>Pulzes</li>
          <li>Strife</li>
          <li>Gottcha bot</li>
          <li>MedInvoice</li>
          <li>Sehyog</li>
          <li>StealthAI</li>
          <li>ProWeb</li>
          <li>Achillies</li>
          <li>Prebook</li>
        </ul>
        {/* <ul className='p-3 grid grid-cols-1 grid-rows-[15]'>
          <li>AKC&apos;69</li>
          <li>CADRE CORPS</li>
          <li>debuggers</li>
          <li>Blockdots</li>
          <li>FOMO</li>
          <li>Technyts</li>
          <li>Potheri FC</li>
          <li>MonkeyScreams</li>
          <li>blazing coders</li>
          <li>Bit-space</li>
          <li>Antibug</li>
          <li>Stealth</li>
          <li>bay718</li>
          <li>Achillies</li>
          <li>User_405_Found</li>
        </ul> */}
      </div>
    </div>
  )
}

export default Results
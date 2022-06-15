import React from 'react'

import phoneImg from '../assets/images/sejutacita-app-screen2.png'

export const Hero = () => {
  return (
    <>
      {/* <!-- Jumbotron --> */}
      <div className="p-6 pb-0 bg-primary text-white flex flex-col align-middle md:flex-row md:justify-around">
        <div className='text-center md:text-left mb-5 flex flex-col justify-center'>
          <h2 className="font-semibold text-3xl mb-5 text-white font-extrabold text-4xl md:text-6xl">
            sejuta<span className="text-sje-yellow">cita</span>
          </h2>
          <p className='mb-5 text-lg'>
            Aplikasi No. 1 Mahasiswa & Pelajar
          </p>
          <p className='hidden md:block w-3/4'>
            Get experience. Build your resume. Get hired
          </p>
        </div>
        <img className='md:w-1/3' src={phoneImg} alt="sejutacita-app-screen2" />
      </div>
      {/* <!-- Jumbotron --> */}
    </>
  )
}

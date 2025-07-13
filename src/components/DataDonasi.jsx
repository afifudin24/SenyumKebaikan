import React from "react";
import { useState } from "react";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import home4 from '../assets/home4.png'
import { Link } from "react-router-dom";
const DataDonasi = ({type, title, href, description, percent, raised, goal}) => {
    const [showImg, setShowImg] = useState(false);
  
    const toggleImage = () => {
      setShowImg(!showImg);
  };
  return (
    
  
    <div className="w-full h-full">
        <div className='mx-4 my-5 hidden bg-white text-primary md:block relative   shadow-cool gap-4 overflow-hidden rounded-2xl '>
                  {/* Kiri: Konten */}
                          <div className=' p-6 w-full flex flex-col justify-between '>
                              <div className='mb-4 w-7/12'>
                                  
                              
                    <div className='mb-4'>
                      <p className='text-xs tracking-wider uppercase text-primary'>
                        {type}
                      </p>
                      <h2 className='text-xl md:text-3xl font-bold mt-3 leading-tight'>
                      {title}
                      </h2>
                    </div>
        
                    {/* Progress */}
                   <div>
          <div className="relative h-2 rounded-full bg-[#3A3A3A] mt-7">
            <div
              className="absolute top-0 left-0 h-2 rounded-full bg-[#C6F6D5]"
              style={{ width: `${percent}` }}
            ></div>
            <div
              className="absolute -top-8 left-[70%] -translate-x-1/2 bg-[#C6F6D5] text-[#1E1E1E] text-[10px] font-sans px-1 rounded pointer-down"
              style={{ width: "28px", left: `${percent}` }}
            >
              {percent} 
            </div>
          </div>
          <div className="flex justify-between text-primary text-xs font-sans mt-2 mb-3 px-1">
            <span>Rp {raised}</span>
            <span>{goal} hari lagi</span>
          </div>
        </div>
 
        
                    {/* Deskripsi */}
                    <p className='text-sm text-primary mb-6 font-secondary'>
                      {description}
                    </p>
        
                    {/* Tombol */}
                    <div className='flex gap-4 justify-start'>
                      {/* <button className='bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 hover:text-primary transition'>
                        Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
                      </button> */}
                       <Link to='/donasi/detaildonasi'>
                      <button className='border border-white bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-gray-100 hover:text-primary transition'>
                        Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                      </button>
                      </Link>
                    </div>
                              </div>
                              
                              {/* <img src={home4} className='absolute right-0 top-0 h-full' alt="" /> */}
                              <img src={href} className='absolute w-80 -right-5 -top-0 -bottom-5 h-full scale-y-105' alt="" />
        
                  {/* Kanan: Gambar */}
                          </div>
                </div>
                <div className='flex flex-col md:hidden'>
                <div className='mb-4 mt-5 w-11/12 px-2 py-5 mx-4 relative bg-primary rounded-xl text-white'>
                                  
                              
                                  <div className='mb-4'>
                                    <p className='text-xs tracking-wider uppercase text-white'>
                                    {type}
                                    </p>
                                    <h2 className='text-lg md:text-3xl font-bold mt-3 leading-tight'>
                                    {title}
                                    </h2>
                                  </div>
                      
                                
                    {/* Progress */}
                   <div>
          <div className="relative h-2 rounded-full bg-[#3A3A3A]">
            <div
              className="absolute top-0 left-0 h-2 rounded-full bg-[#C6F6D5]"
              style={{ width: `${percent}` }}
            ></div>
            <div
              className="absolute -top-8 left-[70%] -translate-x-1/2 bg-[#C6F6D5] text-[#1E1E1E] text-[10px] font-sans px-1 rounded pointer-down"
              style={{ width: "28px", left: `${percent}` }}
            >
              {percent} 
            </div>
          </div>
          <div className="flex justify-between text-[#D9D9D9] text-xs font-sans mt-2 px-1">
            <span>{raised}</span>
            <span>{goal}</span>
          </div>
        </div>
                      
                                  {/* Deskripsi */}
                                  <p className='text-xs md:text-sm text-white mb-6 font-secondary'>
                                  {description}
                                  </p>
                      
                                  {/* Tombol */}
                                  <div className='flex gap-4 justify-center'>
                                    <button className='bg-white text-primary px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-100 transition'>
                                      Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
                                    </button>
                                    <Link to='/donasi/detaildonasi'>
                                    <button className='border border-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-white hover:text-primary transition'>
                                      Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                                    </button>
                                    </Link>
                                    <FontAwesomeIcon className='absolute z-50 top-2 right-2 text-white' onClick={toggleImage} icon={faLeftLong} />
                    </div>
        
                    <div className={`${showImg ? 'w-full' : 'w-0'} transition-all duration-150 absolute right-0 top-0 h-full`}>
        
                      <div className={`relative w-full h-full`}>
                      
                        <img src={home4} alt="" />
        
                      </div>
                    </div>
                                            </div>
                </div>
    </div>
    )
}   
export default DataDonasi;
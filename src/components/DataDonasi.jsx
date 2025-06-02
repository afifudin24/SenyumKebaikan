import React from "react";
import { useState } from "react";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import home4 from '../assets/home4.png'
const DataDonasi = ({type, title, description, percent, raised, goal}) => {
    const [showImg, setShowImg] = useState(false);
  
    const toggleImage = () => {
      setShowImg(!showImg);
  };
  return (
    
  
    <div className="w-full">
        <div className='mx-4 my-5 hidden md:block relative gap-4 overflow-hidden rounded-2xl bg-white shadow-md'>
                  {/* Kiri: Konten */}
                          <div className='bg-primary text-white p-6 w-full flex flex-col justify-between'>
                              <div className='mb-4 w-7/12'>
                                  
                              
                    <div className='mb-4'>
                      <p className='text-xs tracking-wider uppercase text-white'>
                        {type}
                      </p>
                      <h2 className='text-xl md:text-3xl font-bold mt-3 leading-tight'>
                      {title}
                      </h2>
                    </div>
        
                    {/* Progress */}
                    <div className='w-full bg-white rounded-full h-1 mb-4'>
                      <div
                        className='bg-secondary h-2 rounded-full'
                        style={{ width: percent }}
                      ></div>
                    </div>
                    <div    style={{ width: percent }} className='flex font-light justify-between text-sm text-gray-200 mb-6'>
                      <span>Rp {raised}</span>
                      <span>{percent} ({goal} hari lagi)</span>
                    </div>
        
                    {/* Deskripsi */}
                    <p className='text-sm text-white mb-6 font-secondary'>
                      {description}
                    </p>
        
                    {/* Tombol */}
                    <div className='flex gap-4 justify-center'>
                      <button className='bg-white text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition'>
                        Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
                      </button>
                      <button className='border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-[#36554A] transition'>
                        Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                      </button>
                    </div>
                              </div>
                              
                              <img src={home4} className='absolute right-0 top-0 h-full' alt="" />
        
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
                                  <div className='w-full bg-white rounded-full h-1 mb-4'>
                                    <div
                                      className='bg-secondary h-2 rounded-full'
                                      style={{ width: '60%' }}
                                    ></div>
                                  </div>
                                  <div    style={{ width: percent }} className='font-light relative justify-between text-sm text-gray-200 mb-6'>
                                    <span>Rp {raised}</span>
                      <span className='absolute -right-5 top-0'>{percent} </span>
                      <p>({goal} hari lagi)</p>
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
                                    <button className='border border-white px-4 py-2 rounded-full text-xs md:text-sm hover:bg-white hover:text-primary transition'>
                                      Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                                    </button>
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
import React from "react";
import { useState } from "react";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import home4 from '../assets/home4.png'
import gambar from "../assets/donasi/barang1.png"
import { Link } from "react-router-dom";
const DataDonasiBarang = ({type, title, img, href, items, description}) => {
    const [showImg, setShowImg] = useState(false);
    const datadonasi = {
        type,
        title,
        items,
        description
    }
  
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
          <div className=" mt-7 flex flex-col gap-2">
           {
                items.map((item, index) => (
                    <div className="flex gap-2 items-center font-secondary">
                            <div className="p-2 rounded-lg bg-secondary">
                                {item.progress}
                            </div>
                            <div className="flex flex-col w-full  ">
                                <p className="text-sm font-semibold">{item.title}</p>
                                <div className="w-full bg-secondary rounded-2xl overflow-hidden block">
                                    <div className="bg-primary bloc p-1" style={{ width: `${item.progress}` }}>
                                    
                      
                                    </div>
                      </div>
                      <p className="text-sm font-semibold">Terkumpul : {item.terkumpul}</p>
                                </div>
                        </div>
                ))
           }
           
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
                      <Link to="/donasi/detaildonasibarang" state={datadonasi}>
                      <button className='border border-white bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-gray-100 hover:text-primary transition'>
                        Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                      </button>
                      </Link>
                    </div>
                              </div>
                              
                              <img src={href} className='absolute -right-5 scale-y-105 top-0 h-full w-80' alt="" />
        
                  {/* Kanan: Gambar */}
                          </div>
                </div>
                <div className='flex flex-col md:hidden'>
                 <div className='mx-4 my-5 md:hidden bg-white text-primary block relative p-2  shadow-cool gap-4 overflow-hidden rounded-2xl '>
                                  
                              
                                  <div className='mb-4'>
                                    <p className='text-xs tracking-wider uppercase text-white'>
                                    {type}
                                    </p>
                                    <h2 className='text-lg md:text-3xl font-bold mt-3 leading-tight'>
                                    {title}
                                    </h2>
                                  </div>
                      
                                
                    {/* Progress */}
                       <div className=" mt-7 flex flex-col gap-2">
           {
                items.map((item, index) => (
                    <div className="flex gap-2 items-center font-secondary">
                            <div className="p-2 rounded-lg text-sm md:text-lg bg-secondary">
                                {item.progress}
                            </div>
                            <div className="flex flex-col w-full  ">
                                <p className="text-xs md:text-sm font-semibold">{item.title}</p>
                                <div className="w-full bg-secondary rounded-2xl overflow-hidden block">
                                    <div className="bg-primary bloc p-1" style={{ width: `${item.progress}` }}>
                                    
                      
                                    </div>
                                </div>
                                </div>
                        </div>
                ))
           }
           
          </div>
                                  {/* Deskripsi */}
                                  <p className='text-xs md:text-sm text-primary mt-2 mb-6 font-secondary'>
                                  {description}
                                  </p>
                      
                                  {/* Tombol */}
                                  <div className='flex gap-4 justify-start'>
                                    {/* <button className='bg-white text-primary px-4 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-100 transition'>
                                      Donasi sekarang <FontAwesomeIcon icon={ faArrowUpRightDots} />
                                    </button> */}
                                    <Link to="/donasi/detaildonasibarang" state={datadonasi}>
                                    <button className='border border-white bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-gray-100 hover:text-primary transition'>
                                      Selengkapnya <FontAwesomeIcon icon={ faArrowUpRightDots} />
                                    </button>
                                    </Link>
                                    <FontAwesomeIcon className='absolute z-50 top-2 right-2 text-primary' onClick={toggleImage} icon={faLeftLong} />
                    </div>
        
                    <div className={`${showImg ? 'w-full' : 'w-0'} transition-all duration-150 absolute right-0 top-0 h-full`}>
        
                      <div className={`relative w-full h-full`}>
                      
                        <img src={href} alt="" />
        
                      </div>
                    </div>
                                            </div>
                </div>
    </div>
    )
}   
export default DataDonasiBarang;
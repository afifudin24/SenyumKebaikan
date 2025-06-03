import React from "react";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import Donasi from "../../assets/donasi/gambar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
const DetailDonasiBarang = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    return (
        <div>
            <Navbar />
            <Container className={'mt-15 md:mt-20'}>
                <div className="bg-primary p-4 rounded-xl">
                    <h1 className="text-white uppercase text-xl">{data.type}</h1>
                    <img src={Donasi} className="rounded-lg my-2" alt="" />
                    <p className="text-white font-primary my-2 text-2xl font-semibold">{data.title}</p>
                    <p className="text-white my-2 font-primary text-sm"> 12 hari tersisa untuk melakukan donasi</p>
                    <p className="font-secondary text-sm text-white my-2">{data.description} </p>
                    <div className="flex flex-col gap-2 md:flex-row">
                    
                    <div className="flex flex-col gap-2 w-1/2">
                        {
                            data.items.map((item, index) => (
                                <div key={index} className="flex gap-2 items-center">
                                    <div className=" p-2 rounded-xl bg-white text-primary">
                                            {item.progress}
                                    </div>
                                    <p className="font-secondary text-sm text-white">{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="border-l-2 text-center  gap-4 p-2 justify-center border-white flex flex-col ">
                            <button className="bg-white hover:bg-primary hover:text-white hover:shadow-2xl text-primary p-2 rounded-xl">
                                Donasi Sekarang <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </button>
                            <button className="bg-white hover:bg-primary hover:text-white hover:shadow-2xl text-primary p-2 rounded-xl">
                                Lihat transaksi blockchain <FontAwesomeIcon icon={faArrowUpRightDots} />
                            </button>
                    </div>
                        </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
export default DetailDonasiBarang;
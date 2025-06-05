import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import kebutuhan1 from '../../assets/home/kebutuhan1.png'
import kebutuhan2 from '../../assets/home/kebutuhan2.png'
import kebutuhan3 from '../../assets/home/kebutuhan3.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
const CariKebutuhan = () => {
    const [barang, setbarang] = useState([
        {
            image: kebutuhan1,
            barang: "Pakaian Dewasa",
            sisa: "10",
            percent: '50%',
            total : 40
        },
        {
            image: kebutuhan2,
            barang: "Pakaian Ringkas",
            sisa: "20",
            percent: '60%',
            total : 30
        },
        {
            image: kebutuhan3,
            barang: "Pakaian Anak - Anak",
            sisa: "20",
            percent: '70%',
            total : 60
        },
    ])
    return (
        <div>
            <Navbar />
            <Container className={"mt-20"}>
                <div className="bg-secondary mb-5 rounded-lg p-2 w-11/12 mx-auto text-center">
                    <h1 className="text-primary my-1 text-lg font-semibold">SILAHKAN</h1>
                    <p className="text-primary my-1 text-4xl">Pilih Barang Sesuai Kebutuhan</p>
                    <p className="text-primary my-1 font-secondary text-xs md:text-sm">Anda bisa memilih barng yang sedang anda butuhkan lalu di ajukan ke pengelola apabila di diterima maka anda akan mendapatkan barang tersebut secara cuma-cuma</p>
                </div>
                <div className="w-11/12 mx-auto">
                    <p className="text-primary my-1 text-2xl font-semibold">Temukan Kebutuhanmu</p>
                    {
                        barang.map((item, index) => (
                            <ProductCarousel key={index} item={item} />
                        ))
                    }
                </div>
            </Container>
            <Footer />
        </div>
    )
}

const ProductCarousel = ({item}) => {
  const products = [
  
  {
    image: kebutuhan1,
  },
  {
    image: kebutuhan2,
  },
  {
    image: kebutuhan3,
  },
  {
    image: kebutuhan1,
  },
];
  return (
    <div className='flex items-center flex-col md:flex-row'>
      <div className='p-4 shadow-2xl w-full md:w-4/12 rounded-3xl'>
        <p className='font-primary my-4 font-light'>BARANG</p>
              <h4 className='text-primary md:text-xl text-md my-4 font-semibold' >{item.barang}</h4>
              <Link to='/cari-kebutuhan/pengajuan' state={item}>
              <button className='p-3 rounded-full text-sm md:text-lg border hover:shadow-2xl hover:bg-primary hover:text-white my-4 bg-white text-primary shadow-2xl font-secondary'>Ajukan Sekarang
                  <FontAwesomeIcon icon={faArrowUpRightDots} />
              </button>
              </Link>
      </div>
  
    <div className="flex md:w-8/12 w-full overflow-x-scroll gap-2 h-full p-4">
      {products.map((item, index) =>
        (
         <div
      key={index}
      className="h-full min-w-[200px] rounded-2xl overflow-hidden shadow-sm"
    >
            <img
              src={item.image}
              alt="product"
              className="object-cover w-full h-full"
            />
          </div>
        )
      )}
    </div>
    </div>
  );
};

export default CariKebutuhan;
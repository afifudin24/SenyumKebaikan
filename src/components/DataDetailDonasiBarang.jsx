import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
const DataDetailDonasiBarang = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    return (
        <div>
            <Navbar />
            <Container>
                <div className="bg-primary p-2">
                    <h1 className="text-white text-2xl font-bold">Panti Asuhan</h1>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
export default DataDetailDonasiBarang;
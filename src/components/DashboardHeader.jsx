import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const DashboardHeader = () => {
    return (
        <div className=" top-0 shadow-2xl left-0 right-0 bg-[rgba(217,217,217,0.1)] py-5 px-2">
            <div className="w-11/12 md:w-10/12 mx-auto flex justify-end ">
                <FontAwesomeIcon icon={faUser} />

            </div>
        </div>
    )
}

export default DashboardHeader;
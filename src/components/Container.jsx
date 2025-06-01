import React from "react";

const Container = ({ children, className }) => {
    return <div className={`container mx-auto w-11/12 md:w-10/12 ${className}`}>{children}</div>;
};

export default Container;
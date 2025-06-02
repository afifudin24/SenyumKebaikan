import React from "react";

const Container = ({ children, className }) => {
    return <div className={`container mx-auto overflow-x-hidden w-12/12 md:w-10/12 ${className}`}>{children}</div>;
};

export default Container;
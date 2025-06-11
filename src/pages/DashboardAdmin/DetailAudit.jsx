import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { useLocation } from "react-router-dom";

const DetailAudit = () => {
    const location = useLocation();
    const data = location.state;
    console.log(data)
    return (
        <div>
            <DashboardLayout>
                </DashboardLayout>
        </div>
    );
};

export default DetailAudit;
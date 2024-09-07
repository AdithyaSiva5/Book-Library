"use client";

import Login from "@/components/Login";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AdminAuthWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isClient, setIsClient] = useState(false);
    const { adminInfo } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; 
    }

    if (!adminInfo) {
        return <Login />;
    }

    return <>{children}</>;
};

export default AdminAuthWrapper;

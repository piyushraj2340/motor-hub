import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

function Logout() {
    const navigate = useNavigate();

    const { setLoginLogout } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const res = await fetch("/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await res.json();

            if (result.status) {
                setLoginLogout({ type: "USER", payload: false });
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleLogout();
    })

    return (
        <div>Logout Successful!....</div>
    )
}

export default Logout
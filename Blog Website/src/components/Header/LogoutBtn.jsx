import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <button
            className='inline-block px-6 py-2 text-sm font-medium text-white
            bg-blue-600 hover:bg-blue-700 rounded-full
            transition duration-200 ease-in-out transform hover:scale-105'
            onClick={logoutHandler}
        >
            Logout
        </button>
    );
}

export default LogoutBtn;

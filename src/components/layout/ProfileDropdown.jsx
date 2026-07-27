import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutUser = () => {

        dispatch(logout());

        navigate("/");

    };

    return (

        <button

            onClick={logoutUser}

            className="rounded-lg bg-red-500 px-4 py-2 text-white"

        >

            Logout

        </button>

    );

}
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {

    loginSchema

} from "@/validation/authValidation";

import AuthLayout from "@/components/auth/AuthLayout";

import AuthInput from "@/components/auth/AuthInput";

import PasswordInput from "@/components/auth/PasswordInput";

import { useDispatch, useSelector } from "react-redux";

import { login } from "@/redux/slices/authSlice";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";


export default function Login() {

  const dispatch = useDispatch();

const navigate = useNavigate();

const { loading } = useSelector(
    state => state.auth
);

    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useForm({

        resolver: yupResolver(loginSchema)

    });

const onSubmit = async (data) => {

    const result = await dispatch(
        login(data)
    );

    if (login.fulfilled.match(result)) {

        toast.success("Login Successful");

        navigate("/dashboard");

    }

    else {

        toast.error(result.payload);

    }

};

    return (

        <AuthLayout

            title="Welcome Back"

            subtitle="Login to continue"

            footerText="Don't have an account?"

            footerLink="/register"

            footerLabel="Register"

        >

            <form
                onSubmit={handleSubmit(onSubmit)}
            >

                <AuthInput

                    label="Email"

                    type="email"

                    placeholder="Enter email"

                    error={errors.email}

                    {...register("email")}

                />

                <PasswordInput

                    register={register}

                    name="password"

                    label="Password"

                    error={errors.password}

                />

                <button
    className="w-full rounded-lg bg-blue-600 py-3 text-white"
>

    {loading
        ? "Signing In..."
        : "Login"}

</button>

            </form>

        </AuthLayout>

    );

}
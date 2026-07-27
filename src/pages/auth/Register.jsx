import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {

    registerSchema

} from "@/validation/authValidation";

import AuthLayout from "@/components/auth/AuthLayout";

import AuthInput from "@/components/auth/AuthInput";

import PasswordInput from "@/components/auth/PasswordInput";

import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";

import { register as registerUser } from "@/redux/slices/authSlice";

import { useNavigate } from "react-router-dom";

export default function Register() {

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

        resolver: yupResolver(registerSchema)

    });

const onSubmit = async (data) => {
    delete data.confirmPassword;

    const result = await dispatch(registerUser(data));

    if (registerUser.fulfilled.match(result)) {
        toast.success("Registration Successful");
        navigate("/"); // Login page
    } else {
        toast.error(result.payload);
    }
};

    return (

        <AuthLayout

            title="Create Account"

            subtitle="Register to get started"

            footerText="Already have an account?"

            footerLink="/"

            footerLabel="Login"

        >

            <form
                onSubmit={handleSubmit(onSubmit)}
            >

                <AuthInput

                    label="Name"

                    error={errors.name}

                    {...register("name")}

                />

                <AuthInput

                    label="Email"

                    type="email"

                    error={errors.email}

                    {...register("email")}

                />

                <AuthInput

                    label="Phone"

                    error={errors.phone}

                    {...register("phone")}

                />

                <PasswordInput

                    register={register}

                    name="password"

                    label="Password"

                    error={errors.password}

                />

                <PasswordInput

                    register={register}

                    name="confirmPassword"

                    label="Confirm Password"

                    error={errors.confirmPassword}

                />

               

<button
    type="submit"
    disabled={loading}
    className="w-full rounded-lg bg-blue-600 py-3 text-white disabled:cursor-not-allowed disabled:opacity-60"
>
    {loading ? "Registering..." : "Register"}
</button>

            </form>

        </AuthLayout>

    );

}
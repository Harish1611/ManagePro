import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import {

    registerSchema

} from "@/validation/authValidation";

import AuthLayout from "@/components/auth/AuthLayout";

import AuthInput from "@/components/auth/AuthInput";

import PasswordInput from "@/components/auth/PasswordInput";

export default function Register() {

    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useForm({

        resolver: yupResolver(registerSchema)

    });

    const onSubmit = (data) => {

        console.log(data);

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

                    className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white"

                >

                    Register

                </button>

            </form>

        </AuthLayout>

    );

}
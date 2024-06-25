"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useLoginMutation } from "@/store/api/apiSlice";
import { useSelector } from "react-redux";

const Login = () => {
    const { isAdmin } = useSelector(state => state.auth);
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [login, { isSuccess, error, isLoading }] = useLoginMutation();

    useEffect(() => {
        if(isAdmin) {
            router.replace('/admin');
        }

        if(isSuccess) {
            toast.success("Login Successfully!")
        };

        if(error) {
            toast.error(error?.data?.message || "Login failed!")
            console.log("login err -->", error)
        }
    }, [isSuccess, error, isAdmin]);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login({
            email: values.email,
            password: values.password
        })
    };

    return (
        <div className="h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <form
                    id="login"
                    className="space-y-4"
                    action="#"
                    onSubmit={handleSubmit}
                >
                    <h5 className="text-xl font-bold text-center text-slate-800">
                        Sign in to Admin
                    </h5>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 font-medium text-gray-900"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="email@gmail.com"
                            required
                            onChange={handleInput}
                            value={values.email}
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block mb-2 font-medium text-gray-900 "
                        >
                            Your Password
                        </label>
                        <input
                            type={show ? "text" : 'password'}
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                            onChange={handleInput}
                            value={values.password}
                        />
                        {!show ? (
                            <AiOutlineEyeInvisible className="absolute bottom-3 right-2 z-10 cursor-pointer" size={20} onClick={() => setShow(true)} />
                        ) : (
                            <AiOutlineEye className="absolute bottom-3 right-2 z-10 cursor-pointer" size={20} onClick={() => setShow(false)} />
                        )}
                    </div>

                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full mt-2 bg-slate-800 hover:bg-slate-700 p-2 text-white rounded-lg font-medium text-center"
                    >
                        {isLoading ? 'Logining...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
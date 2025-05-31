import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleLogin, ToggleSignUp } from '../redux/popUPSlice';
import { setUser } from '../redux/userSlice';
import { setErrors } from '../redux/errorSlice';
import { setAdmin } from '../redux/admin';
import { setLoading } from '../redux/loadingSlice';
const ROOT_URL = "https://petstore-des0.onrender.com/api"//vegapp-1.onrender.com"

const Login = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        try {
            dispatch(setLoading(true))
            fetch(`${ROOT_URL}/users/login`, {
                method: "POST",
                credentials: "include",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),



            }).then((res) => (res.json())).then(data => {
                if (data.success) {
                    console.log('Login successful:', data.data);
                    dispatch(setLoading(false))
                    if (data.data.role === "admin") {
                        dispatch(setAdmin())

                    }

                    dispatch(setUser(data.data))

                }
                else {
                    dispatch(setLoading(false))
                    dispatch(setErrors({ statusCode: 401, message: data.message }))
                }

            })
        } catch (error) {
            dispatch(setLoading(false))
            console.log(error);

            dispatch(setErrors({ statusCode: 500, message: "opps ! an erroor occureed " }))


        }
        dispatch(ToggleLogin())

    };

    return (
        <div className="min-h-screen top-0 sm:flex items-center justify-center bg-gray-50/30 py-12 px-4 sm:px-6 lg:px-8 fixed sm:top-6  w-full h-full z-10 right-3 left-3">

            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <h2 className="mt-6 text-center text-3xl font-extrabold  text-gray-900">
                    Welcome Back
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-400 focus:border-green-400 hover:shadow-lg hover:shadow-green-400/50 focus:z-10 sm:text-sm"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-400 focus:border-green-400 hover:shadow-lg hover:shadow-green-400/50 focus:z-10 sm:text-sm"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-500 hover:shadow-lg hover:shadow-green-400/50 focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                    >
                        Login
                    </button>

                    <div className="flex items-center justify-between mt-4 ">

                        <span className=" text-indigo-600 hover:text-green-400 text-xl"
                            onClick={() => {
                                dispatch(ToggleSignUp())

                            }}
                        >
                            Create Account
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
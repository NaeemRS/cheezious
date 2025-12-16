"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

export default function LoginPage() {
    const [step, setStep] = useState("options");
    // options | email | otp

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const sendOtp = () => {
        if (!email.trim()) {
            toast.error("Please enter your email");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }

        console.log("Sending OTP to email:", email);
        toast.success("OTP sent to your email");
        setStep("otp");
    };

    const verifyOtp = () => {
        if (otp.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        console.log("Verifying OTP:", otp);
        toast.success("Login successful!");
    };

    return (
        <>
            <Toaster position="top-center" />

            <section>
                <div className="container-fluid mx-auto h-screen">
                    <div className="grid grid-cols-1 lg:grid-cols-5 h-screen">
                        {/* Left */}
                        <div className="col-span-3 flex flex-col items-center justify-center px-16 bg-white">

                            {/* STEP 1: OPTIONS */}
                            {step === "options" && (
                                <>
                                    <h1 className="text-5xl font-bold mb-4">
                                        Welcome Back
                                    </h1>
                                    <p className="text-lg text-gray-500 mb-12">
                                        Login to continue
                                    </p>

                                    <div className="w-full max-w-sm space-y-4">
                                        {/* Google Login */}
                                        <button
                                            onClick={() => toast("Google login coming soon")}
                                            className="w-full border border-gray-300 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-gray-50"
                                        >
                                            <img
                                                src="/images/google.svg"
                                                alt="Google"
                                                className="w-5 h-5"
                                            />
                                            LOGIN WITH GOOGLE
                                        </button>

                                        {/* Email Login */}
                                        <button
                                            onClick={() => setStep("email")}
                                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition"
                                        >
                                            LOGIN WITH EMAIL
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* STEP 2: EMAIL */}
                            {step === "email" && (
                                <>
                                    <h1 className="text-5xl font-bold mb-4">
                                        Login with Email
                                    </h1>
                                    <p className="text-lg text-gray-500 mb-12">
                                        We’ll send you a verification code
                                    </p>

                                    <div className="w-full max-w-sm space-y-6">
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="email"
                                                placeholder="example@email.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                            />
                                        </div>

                                        <button
                                            onClick={sendOtp}
                                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition"
                                        >
                                            SEND OTP
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => setStep("options")}
                                        className="mt-8 text-gray-600 font-semibold"
                                    >
                                        ← Back
                                    </button>
                                </>
                            )}

                            {/* STEP 3: OTP */}
                            {step === "otp" && (
                                <>
                                    <h1 className="text-4xl font-bold mb-4">
                                        Enter OTP
                                    </h1>
                                    <p className="text-lg text-gray-500 mb-10">
                                        Check your email for the 6-digit code
                                    </p>

                                    <div className="w-full max-w-sm space-y-6">
                                        <input
                                            type="text"
                                            maxLength={6}
                                            placeholder="••••••"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className="w-full text-center text-2xl tracking-widest px-4 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                        />

                                        <button
                                            onClick={verifyOtp}
                                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition"
                                        >
                                            VERIFY OTP
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Right */}
                        <div className="col-span-2">
                            <Image
                                src="/images/deliveryMan.webp"
                                alt="Login Illustration"
                                width={400}
                                height={400}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

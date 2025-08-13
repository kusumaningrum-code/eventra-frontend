/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import FormInput from "@/components/FormInput";
import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { Button } from "@/components/ui/button";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { callAPI } from "@/config/axios";

const SignIn: React.FunctionComponent<any> = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const onSignIn = async () => {
    try {
      const response = await callAPI.post(`/user/sign-in`, { email, password });
      console.log("CHECK SIGNIN RESPONSE :", response.data);
      dispatch(setSignIn({ ...response.data, isAuth: true }));
      localStorage.setItem("tkn", response.data.token);
      localStorage.setItem("userId", response.data.id);
      console.log("ini id dari frontend", response.data);

      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Container utama dengan responsive design */}
      <div className="max-w-6xl mx-auto">
        {/* Layout flex yang berubah di mobile */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          {/* Left side - Illustration & Welcome text */}
          <div className="flex flex-col items-center text-center lg:text-left max-w-md">
            <div className="w-full max-w-sm lg:max-w-md mb-6">
              <Image
                src="/images/sign-in.png"
                alt="Sign In Illustration"
                width={500}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-ibrand text-2xl sm:text-3xl lg:text-4xl text-customMediumBlue leading-tight">
                Selamat Datang Kembali!
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-sm">
                Login sekarang dan nikmati fitur menarik yang sudah menunggumu!
              </p>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="w-full max-w-md">
            <Card className="w-full p-6 sm:p-8 lg:p-10 shadow-lg border-0 bg-white">
              {/* Header */}
              <div className="mb-8 text-center">
                <h1 className="font-ibrand text-2xl sm:text-3xl text-customDarkBlue mb-4">
                  Masuk ke akunmu
                </h1>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-sm">
                  <span className="text-gray-600">
                    Tidak punya akun Eventra?
                  </span>
                  <a
                    href="/sign-up"
                    className="text-customLightBlue hover:text-customMediumBlue transition-colors font-medium"
                  >
                    Daftar Sekarang!
                  </a>
                </div>
              </div>

              {/* Form */}
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSignIn();
                }}
              >
                <FormInput
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="Masukkan email Anda"
                  onChange={(e: any) => setEmail(e.target.value)}
                />
                <FormInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Masukkan password Anda"
                  onChange={(e: any) => setPassword(e.target.value)}
                />

                {/* Login Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full bg-customLightBlue hover:bg-customMediumBlue text-white rounded-lg py-3 font-medium transition-colors shadow-md hover:shadow-lg"
                    disabled={!email || !password}
                  >
                    Login Sekarang
                  </Button>
                </div>
              </form>

              {/* Forgot Password Link */}
              <div className="text-center mt-6 pt-4 border-t border-gray-100">
                <a
                  href="/forgot-password"
                  className="text-sm text-gray-600 hover:text-customOrange transition-colors"
                >
                  Lupa Password?
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
//

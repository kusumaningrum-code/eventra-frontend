/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useState } from "react";
import { callAPI } from "@/config/axios";
import FormInput from "@/components/FormInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ForgotPassword: React.FunctionComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [statusMsg, setStatusMsg] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onForgotPassword = async () => {
    setStatusMsg("");
    setIsError(false);
    setIsSubmitting(true);
    try {
      const response = await callAPI.post("/user/forgot-password", { email });
      setStatusMsg(response?.data?.message || "Email terkirim. Cek kotak masukmu.");
      setIsError(false);
    } catch (error: any) {
      const msg =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Gagal mengirim instruksi reset. Coba lagi.";
      setStatusMsg(msg);
      setIsError(true);
      console.log("FORGOT PASSWORD ERROR:", {
        status: error?.response?.status,
        data: error?.response?.data,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="hidden md:flex justify-center">
            <Image
              src="/images/forgot-password.png"
              alt="Lupa password ilustrasi"
              width={560}
              height={420}
              className="w-full h-auto max-w-md lg:max-w-lg"
              priority
            />
          </div>
          <div className="w-full">
            <div className="rounded-2xl bg-customLightBlue shadow-lg px-5 py-6 sm:px-8 sm:py-8">
              <h1 className="text-2xl sm:text-3xl font-ibrand text-white">
                Forgot Password
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/90">
                Enter your email to receive password reset instructions
              </p>
              {statusMsg && (
                <div
                  className={`mt-5 rounded-md px-4 py-3 text-sm ${
                    isError
                      ? "bg-red-50 text-red-700 border border-red-200"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMsg}
                </div>
              )}
              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email || isSubmitting) return;
                  onForgotPassword();
                }}
              >
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Input your email here"
                  onChange={(e: any) => setEmail(e.target.value)}
                  value={email}
                />

                <div className="flex">
                  <Button
                    type="submit"
                    className="w-full bg-customDarkBlue text-white px-4 py-2 rounded-full shadow disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={!email || isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Reset Instructions"}
                  </Button>
                </div>
              </form>
              <div className="mt-8 md:hidden flex justify-center">
                <Image
                  src="/images/forgot-password.png"
                  alt="Lupa password ilustrasi"
                  width={420}
                  height={320}
                  className="w-full h-auto max-w-xs"
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Pastikan email kamu terdaftar dan aktif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

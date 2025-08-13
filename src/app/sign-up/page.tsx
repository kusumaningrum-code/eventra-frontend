/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import Image from "next/image";
// import FormInput from "@/components/FormInput";
// import { Formik, Form, FormikProps } from "formik";

// import * as React from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { callAPI } from "@/config/axios";
// import { SignUpSchema } from "./SignUpSchema";

// interface FormValue {
//   fullname: string;
//   username: string;
//   email: string;
//   password: string;
//   phone: string;
//   gender: string;
//   role: string;
//   referralCode: string;
// }

// const signUp: React.FunctionComponent<any> = () => {
//   const onSignUp = async (values: FormValue) => {
//     console.log("Values being sent", values);
//     try {
//       const res = await callAPI.post("/user/sign-up", {
//         fullname: values.fullname,
//         username: values.username,
//         email: values.email,
//         password: values.password,
//         phone: values.phone,
//         gender: values.gender,
//         role: values.role,
//         referralCode: values.referralCode,
//       });
//       alert(res.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div className="m-8 p-10">
//         <div className="flex justify-center m-5">
//           <div className="space-y-5">
//             <Card className="w-[500px] p-12">
//               <h1 className="font-ibrand text-3xl text-customDarkBlue text-center">
//                 Buat akunmu sekarang juga !
//               </h1>
//               <div className="flex justify-center text-center mb-5 space-x-2">
//                 <p>Sudah punya akun?</p>
//                 <a href="/sign-in" className="text-customLightBlue">
//                   Masuk!
//                 </a>
//               </div>
//               <CardContent>
//                 <Formik
//                   validationSchema={SignUpSchema}
//                   initialValues={{
//                     fullname: "",
//                     username: "",
//                     email: "",
//                     password: "",
//                     phone: "",
//                     gender: "",
//                     role: "CUSTOMER",
//                     referralCode: "",
//                   }}
//                   onSubmit={(values: FormValue, { resetForm }) => {
//                     console.log("Values from input formik :", values);
//                     onSignUp(values);
//                     resetForm();
//                   }}
//                 >
//                   {(props: FormikProps<FormValue>) => {
//                     const { values, handleChange, errors } = props;
//                     console.log("error formik", errors);

//                     return (
//                       <Form>
//                         <div>
//                           <FormInput
//                             name="fullname"
//                             type="text"
//                             label="Fullname"
//                             onChange={handleChange}
//                             value={values.fullname}
//                           />
//                           <FormInput
//                             name="username"
//                             type="text"
//                             label="Username"
//                             onChange={handleChange}
//                             value={values.username}
//                           />
//                           <FormInput
//                             name="email"
//                             type="text"
//                             label="Email"
//                             onChange={handleChange}
//                             value={values.email}
//                           />
//                           <FormInput
//                             name="password"
//                             type="password"
//                             label="Password"
//                             onChange={handleChange}
//                             value={values.password}
//                           />
//                           <FormInput
//                             name="phone"
//                             type="text"
//                             label="Phone Number"
//                             onChange={handleChange}
//                             value={values.phone}
//                           />

//                           <div className="mb-4 mt-4">
//                             <label className="block text-black font-semibold">
//                               Gender
//                             </label>
//                             <div className="flex space-x-4 mt-2">
//                               <label className="inline-flex items-center">
//                                 <input
//                                   type="radio"
//                                   name="gender"
//                                   value="male"
//                                   checked={values.gender === "male"}
//                                   onChange={handleChange}
//                                   className="form-radio"
//                                 />
//                                 <span className="ml-2">Male</span>
//                               </label>
//                               <label className="inline-flex items-center">
//                                 <input
//                                   type="radio"
//                                   name="gender"
//                                   value="female"
//                                   checked={values.gender === "female"}
//                                   onChange={handleChange}
//                                   className="form-radio"
//                                 />
//                                 <span className="ml-2">Female</span>
//                               </label>
//                               <label className="inline-flex items-center">
//                                 <input
//                                   type="radio"
//                                   name="gender"
//                                   value="other"
//                                   checked={values.gender === "other"}
//                                   onChange={handleChange}
//                                   className="form-radio"
//                                 />
//                                 <span className="ml-2">Other</span>
//                               </label>
//                             </div>
//                           </div>
//                           <div className="mb-4 mt-4">
//                             <label className="block text-black font-semibold">
//                               Role
//                             </label>
//                             <div className="flex space-x-4 mt-2">
//                               <label className="inline-flex items-center">
//                                 <input
//                                   type="radio"
//                                   name="role"
//                                   value="CUSTOMER"
//                                   checked={values.role === "CUSTOMER"}
//                                   onChange={handleChange}
//                                   className="form-radio"
//                                 />
//                                 <span className="ml-2">Customer</span>
//                               </label>
//                               <label className="inline-flex items-center">
//                                 <input
//                                   type="radio"
//                                   name="role"
//                                   value="ORGANIZER"
//                                   checked={values.role === "ORGANIZER"}
//                                   onChange={handleChange}
//                                   className="form-radio"
//                                 />
//                                 <span className="ml-2">Organizer</span>
//                               </label>
//                             </div>
//                           </div>
//                           <FormInput
//                             name="referralCode"
//                             type="text"
//                             label="Referral Code (Optional)"
//                             onChange={handleChange}
//                             value={values.referralCode}
//                           />
//                           <div className="flex justify-center items-center gap-4 p-5">
//                             <Button
//                               type="submit"
//                               className="bg-customMediumBlue text-white px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-full shadow"
//                             >
//                               Sign Up
//                             </Button>
//                           </div>
//                         </div>
//                       </Form>
//                     );
//                   }}
//                 </Formik>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="flex flex-col justify-center items-center p-5">
//             <Image
//               src="/images/sign-up.png"
//               alt="Logo"
//               width={500}
//               height={100}
//             />
//             <h3 className="font-ibrand text-4xl">
//               Tidak lagi ketinggalan event favoritmu
//             </h3>
//             <p>
//               Gabung sekarang dan rasakan kemudahan bertransaksi dan mengelola
//               event di Eventra
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default signUp;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import FormInput from "@/components/FormInput";
import { Formik, Form, FormikProps } from "formik";

import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { callAPI } from "@/config/axios";
import { SignUpSchema } from "./SignUpSchema";
import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";

interface FormValue {
  fullname: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  gender: string;
  role: string;
  referralCode: string;
}

const SignUp: React.FunctionComponent<any> = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (user?.isAuth) {
      router.replace("/");
    }
  }, [user?.isAuth, router]);

  const onSignUp = async (values: FormValue) => {
    console.log("Values being sent", values);
    try {
      const res = await callAPI.post("/user/sign-up", {
        fullname: values.fullname,
        username: values.username,
        email: values.email,
        password: values.password,
        phone: values.phone,
        gender: values.gender,
        role: values.role,
        referralCode: values.referralCode,
      });
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Container utama dengan responsive design */}
      <div className="max-w-6xl mx-auto">
        {/* Layout flex yang berubah di mobile */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
          {/* Left side - Sign Up Form */}
          <div className="w-full max-w-2xl order-2 lg:order-1">
            <Card className="w-full p-6 sm:p-8 lg:p-10 shadow-lg border-0 bg-white">
              {/* Header */}
              <div className="mb-8 text-center">
                <h1 className="font-ibrand text-2xl sm:text-3xl text-customDarkBlue mb-4 leading-tight">
                  Buat akunmu sekarang juga!
                </h1>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-sm">
                  <span className="text-gray-600">Sudah punya akun?</span>
                  <a
                    href="/sign-in"
                    className="text-customLightBlue hover:text-customMediumBlue transition-colors font-medium"
                  >
                    Masuk!
                  </a>
                </div>
              </div>

              <CardContent className="p-0">
                <Formik
                  validationSchema={SignUpSchema}
                  initialValues={{
                    fullname: "",
                    username: "",
                    email: "",
                    password: "",
                    phone: "",
                    gender: "",
                    role: "CUSTOMER",
                    referralCode: "",
                  }}
                  onSubmit={(values: FormValue, { resetForm }) => {
                    console.log("Values from input formik :", values);
                    onSignUp(values);
                    resetForm();
                  }}
                >
                  {(props: FormikProps<FormValue>) => {
                    const { values, handleChange, errors } = props;
                    console.log("error formik", errors);

                    return (
                      <Form className="space-y-6">
                        {/* Basic Info Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormInput
                            name="fullname"
                            type="text"
                            label="Nama Lengkap"
                            onChange={handleChange}
                            value={values.fullname}
                            placeholder="Masukkan nama lengkap"
                          />
                          <FormInput
                            name="username"
                            type="text"
                            label="Username"
                            onChange={handleChange}
                            value={values.username}
                            placeholder="Masukkan username"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormInput
                            name="email"
                            type="email"
                            label="Email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Masukkan email"
                          />
                          <FormInput
                            name="phone"
                            type="tel"
                            label="Nomor Telepon"
                            onChange={handleChange}
                            value={values.phone}
                            placeholder="Masukkan nomor telepon"
                          />
                        </div>

                        <FormInput
                          name="password"
                          type="password"
                          label="Password"
                          onChange={handleChange}
                          value={values.password}
                          placeholder="Masukkan password"
                        />

                        {/* Gender Section */}
                        <div className="space-y-3">
                          <label className="block text-gray-700 font-semibold text-sm">
                            Jenis Kelamin
                          </label>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={values.gender === "male"}
                                onChange={handleChange}
                                className="form-radio text-customLightBlue focus:ring-customLightBlue"
                              />
                              <span className="ml-2 text-gray-700">
                                Laki-laki
                              </span>
                            </label>
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={values.gender === "female"}
                                onChange={handleChange}
                                className="form-radio text-customLightBlue focus:ring-customLightBlue"
                              />
                              <span className="ml-2 text-gray-700">
                                Perempuan
                              </span>
                            </label>
                            <label className="inline-flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="gender"
                                value="other"
                                checked={values.gender === "other"}
                                onChange={handleChange}
                                className="form-radio text-customLightBlue focus:ring-customLightBlue"
                              />
                              <span className="ml-2 text-gray-700">
                                Lainnya
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* Role Section */}
                        <div className="space-y-3">
                          <label className="block text-gray-700 font-semibold text-sm">
                            Daftar Sebagai
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                              <input
                                type="radio"
                                name="role"
                                value="CUSTOMER"
                                checked={values.role === "CUSTOMER"}
                                onChange={handleChange}
                                className="form-radio text-customLightBlue focus:ring-customLightBlue"
                              />
                              <div className="ml-3">
                                <span className="font-medium text-gray-700">
                                  Customer
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                  Ikuti dan beli tiket event
                                </p>
                              </div>
                            </label>
                            <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                              <input
                                type="radio"
                                name="role"
                                value="ORGANIZER"
                                checked={values.role === "ORGANIZER"}
                                onChange={handleChange}
                                className="form-radio text-customLightBlue focus:ring-customLightBlue"
                              />
                              <div className="ml-3">
                                <span className="font-medium text-gray-700">
                                  Organizer
                                </span>
                                <p className="text-xs text-gray-500 mt-1">
                                  Buat dan kelola event
                                </p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <FormInput
                          name="referralCode"
                          type="text"
                          label="Kode Referral (Opsional)"
                          onChange={handleChange}
                          value={values.referralCode}
                          placeholder="Masukkan kode referral"
                        />

                        {/* Submit Button */}
                        <div className="pt-6">
                          <Button
                            type="submit"
                            className="w-full bg-customMediumBlue hover:bg-customDarkBlue text-white py-3 font-medium transition-colors shadow-md hover:shadow-lg rounded-lg"
                          >
                            Daftar Sekarang
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Illustration & Welcome text */}
          <div className="flex flex-col items-center text-center lg:text-left max-w-md order-1 lg:order-2">
            <div className="w-full max-w-sm lg:max-w-md mb-6">
              <Image
                src="/images/sign-up.png"
                alt="Sign Up Illustration"
                width={500}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="space-y-4 px-4 lg:px-0">
              <h3 className="font-ibrand text-2xl sm:text-3xl lg:text-4xl text-customMediumBlue leading-tight">
                Tidak lagi ketinggalan event favoritmu
              </h3>
              <p className="text-gray-600 text-sm sm:text-base max-w-sm mx-auto lg:mx-0">
                Gabung sekarang dan rasakan kemudahan bertransaksi dan mengelola
                event di Eventra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

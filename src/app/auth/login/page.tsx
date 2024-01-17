import React from "react";
import Image from "next/image";
import LoginForm from "@/components/auth/forms/login";

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="flex h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto rounded-full"
          width={1920}
          height={1280}
          src={
            "https://t4.ftcdn.net/jpg/02/40/63/55/360_F_240635575_EJifwRAbKsVTDnA3QE0bCsWG5TLhUNEZ.jpg"
          }
          alt=""
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
          Iniciar Sesión
        </h2>
      </div>
      <LoginForm setEmail={setEmail} setPassword={setPassword} />
    </div>
  );
};

export default LoginPage;

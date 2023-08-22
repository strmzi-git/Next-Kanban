"use client";

import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { showLoginModalHook } from "@/app/hooks/showLoginModal";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  //   { auth: {} }
);

const SocialLogin = function () {
  const showLoginModal = showLoginModalHook();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user?.identities?.[0].identity_data) {
        showLoginModal.onClose();
      }
    });
  }, []);

  const handleSocialLogin = async function () {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/",
      },
    });
  };

  return (
    <div className="">
      <div className="w-full">
        <Button
          functionality={() => handleSocialLogin()}
          text="Continue with Google"
          props="w-full py-3 text-center flex justify-center text-white font-semibold bg-blue-400 bg-opacity-80"
          icon={FcGoogle}
        />
        <div className="flex items-center gap-2 my-1 w-full">
          <div className="bg-black bg-opacity-50 h-[1px] w-[45%]"></div>
          <p className="text-gray500 text-sm">OR</p>
          <div className="bg-black bg-opacity-50 h-[1px] w-[45%]"></div>
        </div>
        <Button
          // functionality={() => handleSocialLogin(github)}
          text="Continue with Github"
          props="w-full py-3 text-center flex justify-center text-white font-semibold  bg-black bg-opacity-80"
          icon={BsGithub}
        />
      </div>
    </div>
  );
};

export default SocialLogin;

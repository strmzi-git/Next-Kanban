"use client";

import { showLoginModalHook } from "@/app/hooks/showLoginModal";
import { ShowSideBarHook } from "../../hooks/showSideBar";
import Button from "../Button";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

const TopSidebar = function () {
  const sidebarHook = ShowSideBarHook();
  const showLoginModal = showLoginModalHook();
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      const user = session?.user?.identities?.[0].identity_data;
      console.log(user);
      if (user) {
        setCurrentUser(user);
      }
    });
  }, []);

  return (
    <div
      className={` flex items-center justify-start  border-b
${sidebarHook.isOpen ? "h-auto py-4" : " h-[80px]"}
`}
    >
      <div className={`w-full px-2 ${sidebarHook.isOpen ? "px-4" : "px-2"} `}>
        <div
          className={` ${
            !sidebarHook.isOpen && "justify-center"
          } flex items-center gap-4 mb-[12px]`}
        >
          <Image
            src={currentUser?.avatar_url || "/images/icon-user.svg"}
            width={50}
            height={50}
            alt="User profile picture or placeholder"
            className="w-[50px] h-[50px] rounded-full bg-rose-400"
          ></Image>
          {sidebarHook.isOpen && (
            <div className="">
              <h3>{currentUser?.full_name || "Not logged in..."}</h3>
              <p className="text-sm font-light opacity-50 ">Free Tier</p>
            </div>
          )}
        </div>
        {sidebarHook.isOpen && (
          <Button
            functionality={() => {
              if (!currentUser) {
                showLoginModal.onOpen();
              }
            }}
            text={`${
              currentUser ? "Upgrade to premium" : "Login to get started"
            }`}
            props="text-white py-[8px] text-center text-md font-light tracking-[0.5px] rounded-sm  cursor-pointer hover:bg-opacity-90 duration-300 bg-accentRose w-full"
          />
        )}
      </div>
    </div>
  );
};

export default TopSidebar;

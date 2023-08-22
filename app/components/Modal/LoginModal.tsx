"use client";

import { showLoginModalHook } from "@/app/hooks/showLoginModal";
import Modal from "./Modal";
import SocialLogin from "./SocialLogin";

const LoginModal = function () {
  const showLoginModal = showLoginModalHook();
  if (!showLoginModal.isOpen) return;

  return <Modal body={<SocialLogin />} />;
};

export default LoginModal;

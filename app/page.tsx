import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  return (
    <div className="flex relative ">
      <Sidebar />
      <Main />
      <Modal />
    </div>
  );
}

"use client";

import AdminSideBar from "@/components/admin/AdminSideBar";
import Loader from "@/components/loaders/Loader";
import { useGetAllMessagesQuery } from "@/store/message/messageApi";
import Heading from "@/utils/Heading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
  const { isLoading, isSuccess } = useGetAllMessagesQuery();
  const { isAdmin } = useSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    if(!isLoading && !isAdmin) {
      router.replace('/');
    }
  }, [isAdmin, isLoading])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (isSuccess && isAdmin) ? (
        <div className="w-full h-full flex bg-no-repeat bg-gradient-to-r from-[#DAD299] to-[#B0DAB9] text-slate-900">
            <Heading title={'Kyaw Swar Lynn - Admin'} />
            <div className="h-screen w-[20%] overflow-y-auto main-scrollbar">
              <AdminSideBar />
            </div>

            <div className="h-screen w-[80%] overflow-y-auto main-scrollbar">
              {children}
            </div>
        </div>
      ) : null}
    </>
  );
}

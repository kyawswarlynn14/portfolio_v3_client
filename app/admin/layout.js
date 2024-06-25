"use client";

import AdminSideBar from "@/components/admin/AdminSideBar";
import Loader from "@/components/loaders/Loader";
import { useGetLayoutQuery } from "@/store/layout/layoutApi";
import { useGetAllMessagesQuery } from "@/store/message/messageApi";
import Heading from "@/utils/Heading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function AdminLayout({ children }) {
  const { isAdmin } = useSelector(state => state.auth);
  const { isLoading: messageLoading, isSuccess } = useGetAllMessagesQuery();
  const { isLoading: aboutMeLoading } = useGetLayoutQuery("about_me")
  const { isLoading: serviceLoading } = useGetLayoutQuery("service_info")
  const { isLoading: projectLoading } = useGetLayoutQuery("project_info")
  const { isLoading: blogLoading } = useGetLayoutQuery("blog_info")
  const router = useRouter();

  const isLoading = messageLoading|| aboutMeLoading || serviceLoading || projectLoading || blogLoading;

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

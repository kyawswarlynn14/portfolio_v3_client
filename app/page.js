"use client";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import StarsCanvas from "@/components/canvas/Stars";
import Heading from "@/utils/Heading";
import { Service, Tools, Contact, Blog, Main, Projects, Certificates} from '@/components/ui/index'
import { useGetLayoutQuery } from "@/store/layout/layoutApi";
import { useGetAllServicesQuery } from "@/store/service/serviceApi";
import { useGetAllProjectsQuery } from "@/store/project/projectApi";
import { useGetAllCertificatesQuery } from "@/store/certificate/certificateApi";
import MainSkeleton from "@/components/loaders/MainSkeleton";
import { useCreateVisitorLogMutation } from "@/store/visitorLog/visitorLogApi";
import Cookies from "js-cookie";

export default function Home() {
  const first = Cookies.get('first_time') || 'true';
  const [show, setShow] = useState(false);
  const { isLoading: aboutLoading, data: aboutMeData } = useGetLayoutQuery("about_me")
  const { isLoading: serviceInfoLoading, data: serviceInfoData } = useGetLayoutQuery("service_info")
  const { isLoading: projectInfoLoading, data: projectInfoData } = useGetLayoutQuery("project_info")
  const { isLoading: blogInfoLoading, data: blogInfoData } = useGetLayoutQuery("blog_info")
  const { isLoading: serviceLoading, data: serviceData } = useGetAllServicesQuery()
  const { isLoading: projectLoading, data: projectData } = useGetAllProjectsQuery()
  const { isLoading: certificateLoading, data: certificateData } = useGetAllCertificatesQuery()
  const [ createVisitorLog ] = useCreateVisitorLogMutation();

  const isLoading = aboutLoading || serviceInfoLoading || projectInfoLoading || blogInfoLoading || serviceLoading || projectLoading || certificateLoading;

  useEffect(() => {
    const runCreateVisitorLog = async () => {
      console.log("call create visitor >>>")
      await createVisitorLog();
      Cookies.set('first_time', "false");
    };
    if(first === "true") {
      runCreateVisitorLog();
    }
  }, [first, createVisitorLog]);  
 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Heading title="Kyaw Swar Lynn - Developer" />

      {isLoading ? (
        <MainSkeleton />
      ) : (
        <>
          <Main aboutMe={aboutMeData?.layout?.data} />

          <Service serviceInfo={serviceInfoData?.layout?.data} services={serviceData?.services}/>

          <Tools />

          <Projects projectInfo={projectInfoData?.layout?.data} projects={projectData?.projects} />

          <div className="relative z-0">
            <Certificates certificates={certificateData?.certificates} />
            <Contact />
            <div className="hidden md:block">
              <StarsCanvas />
            </div>
            <Blog blogInfo={blogInfoData?.layout?.data} />
          </div>
        </>
      )}

      {show && (
        <button
          className="fixed bottom-10 right-2 md:right-10  p-3 rounded  bg-[#1f3150] dark:bg-cyan-300 bg-opacity-90 shadow"
          onClick={handleScrollTop}
        >
          <IoArrowUp className="text-xl text-white dark:text-black" />
        </button>
      )}
    </>
  );
}

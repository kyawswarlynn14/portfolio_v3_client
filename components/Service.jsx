import { SERVICES, SERVICEINFO } from "@/constants";
import ServiceCard from "./ServiceCard";
import ItemLayout from "./layouts/ItemLayout";

function Service() {
  return (
    <div id="services" className="pageMainDiv pt-10">
      <ItemLayout
        className={" mb-8 md:text-lg"}
      >
        <h3 className="subTitle mb-4">{SERVICEINFO?.title}</h3>

        <p className=" text-md leading-8 text-justify">
          {SERVICEINFO?.description}
        </p>
      </ItemLayout>

      <div className="w-full flex flex-row flex-wrap justify-between gap-4">
        {SERVICES?.length &&
          SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
      </div>
    </div>
  );
}

export default Service;

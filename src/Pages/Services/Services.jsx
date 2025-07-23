import ServiceCard from "../../components/ui/ServiceCard";
import useServices from "../../Hooks/useServices";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto pt-8 pb-12">
      <h2 className="text-xl lg:text-4xl text-center font-semibold underline text-[#16a4eb]">
        More Services{" "}
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
        {services?.map((service) => (
          <ServiceCard key={service._id} serviceData={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

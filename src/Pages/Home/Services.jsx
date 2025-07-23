import { FaArrowRight } from "react-icons/fa";
import ServiceCard from "../../components/ui/ServiceCard";
import useServices from "../../Hooks/useServices";
import Title from "../../Shared/Title";
import { Link } from "react-router";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <div className="py-16">
      <Title
        title="Our Core Services"
        subtitle="Discover our wide range of professional services crafted to elevate your business."
      ></Title>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-items-center">
        {services?.slice(0, 3)?.map((service) => (
          <ServiceCard key={service._id} serviceData={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link
          to="/services"
          className="w-48 flex justify-center items-center gap-3 mx-4 py-1.5 rounded-sm bg-gray-200 text-black hover:bg-[#16a4eb] hover:text-white"
        >
          More Services <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};
export default Services;

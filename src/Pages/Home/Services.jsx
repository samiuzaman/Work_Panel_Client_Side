import ServiceCard from "../../components/ui/ServiceCard";
import useServices from "../../Hooks/useServices";
import Title from "../../Shared/Title";

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
        {services?.map((service) => (
          <ServiceCard key={service._id} serviceData={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};
export default Services;

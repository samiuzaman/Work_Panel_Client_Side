import { Button } from "../../components/ui/button";
import Title from "../../Shared/Title";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto">
      <Banner />
      <Services />
      <h2>Home Page</h2>
      
    </div>
  );
};

export default Home;

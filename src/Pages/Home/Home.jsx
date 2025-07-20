import { Button } from "../../components/ui/button";
import Title from "../../Shared/Title";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <Banner />
      <h2>Home Page</h2>
      <Title title="Title" subtitle="Subtitle"></Title>
    </div>
  );
};

export default Home;

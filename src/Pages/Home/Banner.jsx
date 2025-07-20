import { Button } from "../../components/ui/button";


const Banner = () => {
    return (
      <div className="w-full banner py-64 text-center space-y-4">
        <h2 className="font-Inter text-4xl font-semibold text-green-400">
          One Platform to Monitor, Manage & Pay Your Team
        </h2>
        <p className="text-gray-200 font-normal lg:w-3/5 mx-auto">
          Stay on top of your team's performance and automate your HR processes,
          including updates, contracts, and monthly salary payments
        </p>
        <Button variant="outline" className="cursor-pointer hover:bg-green-500 hover:text-white hover:border-none">Explore All Services</Button>
      </div>
    );
};

export default Banner;
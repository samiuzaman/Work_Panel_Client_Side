import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Rating from "react-rating";
import { FaArrowRight, FaStar } from "react-icons/fa";

const ServiceCard = ({ serviceData }) => {
  const {
    _id,
    image,
    title,
    description,
    category,
    rating,
    price,
    technologies,
  } = serviceData || {};
  console.log("Service Data: ", serviceData);
  return (
    <Card className="w-full max-w-sm pt-0 h-full transition-transform duration-200 hover:scale-105 flex flex-col justify-around">
      <div>
        <CardHeader className="p-0">
          <img className="w-full h-56 rounded-t-xl border-b" src={image} />
        </CardHeader>
        <CardContent className="px-4 space-y-2">
          <CardTitle>
            <h3 className="text-xl font-semibold font-Inter mb-3">{title}</h3>
            <div className="flex items-center gap-3 flex-wrap font-Inter text-sm font-normal mb-4">
              {technologies.map((techstack) => (
                <p className=" border border-green-500 rounded-md px-2 py-0.5 bg-green-50">
                  {techstack}
                </p>
              ))}
            </div>
            <hr />
          </CardTitle>
          <p>
            <span className="font-medium">Category:</span> {category}
          </p>
          <div className="flex gap-2">
            <p className="font-medium">Rating: </p>
            <p>{rating}/5</p>
            <Rating
              initialRating={rating}
              readonly={true}
              emptySymbol={<FaStar className="text-gray-400" />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar className="text-yellow-500" />}
            />
          </div>
          <div className="flex gap-6 items-center text-lg">
            <span className="font-medium text-green-500">
              <span className="text-black"> Min Price :</span> $
              {price.map((rate) => (
                <span>{rate.min_price}</span>
              ))}
            </span>
            <span className="font-medium text-green-500">
              <span className="text-black">Max Price :</span> $
              {price.map((rate) => (
                <span className=" ">{rate.max_price}</span>
              ))}{" "}
            </span>
          </div>

          <p className="text-justify text-sm">{description.slice(0, 88)}...</p>
        </CardContent>
      </div>
      <Link
        to={`/details/${_id}`}
        className="flex justify-center items-center gap-3 mx-4 py-1 rounded-sm bg-gray-200 text-black hover:bg-[#16a4eb] hover:text-white"
      >
        Details <FaArrowRight />
      </Link>
    </Card>
  );
};

export default ServiceCard;

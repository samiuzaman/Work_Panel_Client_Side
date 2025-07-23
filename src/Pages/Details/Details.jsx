import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  return (
    <div>
      Details Page
      <h2>Service ID: {id}</h2>
    </div>
  );
};

export default Details;

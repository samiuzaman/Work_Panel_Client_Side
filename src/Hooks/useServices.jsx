import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useServices = () => {
  const {
    data: services,
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/services");
      return res.data;
    },
  });
  return [services, loading, refetch];
};

export default useServices;

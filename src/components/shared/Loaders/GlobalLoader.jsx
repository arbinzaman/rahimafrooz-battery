import { RotatingSquare } from "react-loader-spinner";
import { useLoading } from "../../../contexts/LoadingContext";

const GlobalLoader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="loader">
        <RotatingSquare
          visible={true}
          height="100"
          width="100"
          color="#deebf6"
          ariaLabel="rotating-square-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default GlobalLoader;

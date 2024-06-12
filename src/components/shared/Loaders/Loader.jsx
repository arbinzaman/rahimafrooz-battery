import { RotatingSquare } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color="#0476D0"
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

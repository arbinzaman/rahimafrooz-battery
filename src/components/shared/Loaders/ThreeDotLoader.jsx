import { ThreeDots } from "react-loader-spinner";

const ThreeDotLoader = () => {
  return (
    // <button type="" className="flex gap-2 btn btn-sm bg-background ">
    
      <ThreeDots
        visible={true}
        height="30"
        width="30"
        color="#0d72b9"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    // </button>
  );
};

export default ThreeDotLoader;

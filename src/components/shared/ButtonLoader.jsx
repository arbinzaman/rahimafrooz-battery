import { ThreeCircles } from "react-loader-spinner";

const ButtonLoader = () => {
  return (
    <div className="">
      <ThreeCircles
        visible={true}
        height="12"
        width="12"
        color="#FFFFFF"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default ButtonLoader;

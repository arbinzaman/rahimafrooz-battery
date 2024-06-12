import { LineWave } from "react-loader-spinner";

const LineWaveLoader = () => {
  return (
    <div>
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#FFFFFF"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};

export default LineWaveLoader;

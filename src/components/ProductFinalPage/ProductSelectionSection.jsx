import { useState } from "react";
import img1 from "../../assets/images/BatteryFinalPage/Product-01.png";
import img2 from "../../assets/images/BatteryFinalPage/Product Final Page.png";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const ProductSelectionSection = ({ battery }) => {
  const { brand, imgurls, total_warranty, ref_amperehour_ah, voltage, price } =
    battery;
  
  const navigate = useNavigate();
  const [img, setImg] = useState(img1);

  const featuresImg = (imgSrc) => {
    setImg(imgSrc);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-3">
        <div className="mx-auto">
          <img
            src={imgurls}
            className=" lg:my-10 w-40 lg:w-auto mx-auto"
            alt=""
          />
          <div className="flex lg:my-10 mt-5">
            <div>
              <img
                src={img2}
                alt=""
                className="bg-white p-3 h-24 lg:h-28 mr-5"
                onClick={() => featuresImg(img2)}
              />
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="bg-white p-3 h-24 lg:h-28  mr-5"
                onClick={() => featuresImg(img1)}
              />
            </div>
            <div>
              <img
                src={img2}
                alt=""
                className="bg-white p-3 h-24 lg:h-28  mr-5"
                onClick={() => featuresImg(img2)}
              />
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="bg-white p-3 h-24 lg:h-28  mr-5"
                onClick={() => featuresImg(img1)}
              />
            </div>
          </div>
        </div>
        <div className="p-10 mt-10">
          <h1 className="text-large font-bold text-primary mb-10">{brand}</h1>
          <div className="text-regular text-black mb-5 font-medium ">
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span className="">
                Warranty: {total_warranty} Months Warranty{" "}
              </span>
            </p>
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span>Capacity: {ref_amperehour_ah}AH </span>
            </p>
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span>Battery Voltage: {voltage} </span>
            </p>
          </div>
          <p className="text-regular ml-3 font-medium mt-20">
            <span className="text-black">MRP :</span>{" "}
            <span className="text-primary font-bold">&#2547; {price}</span>
          </p>

          <div className="mt-10 lg:mt-48 flex flex-col gap-5 items-center justify-center lg:flex-row lg:justify-start">
            <button
              disabled
              className="btn btn-ghost text-white bg-primary px-10 text-regular"
            >
              Buy Now
            </button>
            <button
              onClick={() => navigate("/find-dealer")}
              className="btn btn-ghost text-white bg-primary px-10 text-regular"
            >
              Nearest Dealer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionSection;

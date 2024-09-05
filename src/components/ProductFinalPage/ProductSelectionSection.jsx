import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
const ProductSelectionSection = ({ battery }) => {
  const {
    battery_name,
    imgurls,
    total_warranty,
    capacity,
    voltage,
    price,
    e_store_link,
  } = battery;

  const navigate = useNavigate();
  const [img, setImg] = useState(imgurls ? imgurls[0] : "");

  const featuresImg = (imgSrc) => {
    setImg(imgSrc);
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 content-start gap-5 my-10 md:my-20 mx-3">
        <div className="mx-auto">
          <img src={img} className="w-60 md:w-96 mx-auto" alt="" />
          <div className="flex justify-center lg:my-10 mt-5">
            {imgurls ? (
              imgurls?.map((imageUrl, i) => (
                <img
                  key={i}
                  src={imageUrl}
                  alt=""
                  className={
                    img === imageUrl
                      ? "bg-white border border-primary h-7 lg:h-16 mr-5"
                      : "bg-white h-7 lg:h-16 mr-5"
                  }
                  onClick={() => featuresImg(imageUrl)}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="">
          <h1 className="text-large font-bold text-primary mb-10">
            {battery_name}
          </h1>
          <div className="text-regular text-black mb-5 font-medium ">
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span className="">
                Warranty: {total_warranty} Months Warranty{" "}
              </span>
            </p>
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span>Capacity: {capacity} AH </span>
            </p>
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span>Battery Voltage: {voltage} v</span>
            </p>
          </div>
          <p className="text-regular ml-3 font-medium mt-20">
            <span className="text-black">MRP :</span>{" "}
            <span className="text-primary font-bold">&#2547; {price}</span>
          </p>

          <div className="mt-10 lg:mt-28 flex flex-col gap-5 items-center justify-center lg:flex-row lg:justify-start">
            <Link
              to={e_store_link}
              className="btn btn-ghost text-white bg-primary px-10 text-regular"
            >
              Buy Now
            </Link>
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

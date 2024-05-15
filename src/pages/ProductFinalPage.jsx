import img1 from "../assets/images/BatteryFinalPage/Product-01.png";
import img2 from "../assets/images/BatteryFinalPage/Product Final Page.png";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
import ProductInformation from "../components/ProductFinalPage/ProductInformation";
import SimilarProduct from "../components/ProductFinalPage/SimilarProduct";

const ProductFinalPage = () => {
  const [img, setImg] = useState(img1);
  console.log(img);
  const featuresImg = (imgSrc) => {
    setImg(imgSrc);
  };
  return (
    <section className="bg-background">
      {/* hero section start for battery final page  */}
      <div className="grid grid-cols-2 ">
        <div className="mx-auto">
          <img src={img} className=" lg:my-10" width="510px" alt="" />
          <div className="flex lg:my-10 ">
            <div>
              <img
                src={img2}
                alt=""
                className="bg-white p-5 h-28 mr-5"
                onClick={() => featuresImg(img2)}
              />
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="bg-white p-5 h-28 mr-5"
                onClick={() => featuresImg(img1)}
              />
            </div>
            <div>
              <img
                src={img2}
                alt=""
                className="bg-white p-5 h-28 mr-5"
                onClick={() => featuresImg(img2)}
              />
            </div>
            <div>
              <img
                src={img1}
                alt=""
                className="bg-white p-5 h-28 mr-5"
                onClick={() => featuresImg(img1)}
              />
            </div>
          </div>
        </div>
        <div className="my-auto p-10 mt-28 ">
          <h1 className="text-xlarge font-bold text-primary mb-10">
            Globatt Ace N50ZL Battery
          </h1>
          <div className="text-2xl mb-5 font-medium ">
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span className="">Warranty: 24 Months Warranty </span>
            </p>
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span>Capacity: 60AH </span>
            </p>
            <p className="flex ">
              <FaAngleRight className="h-6 mr-3 mt-1" />{" "}
              <span>Battery Voltage: 12 </span>
            </p>
          </div>
          <p className="text-2xl ml-3 font-medium mt-20">
            MRP :{" "}
            <span className="text-primary font-bold">&#2547; 14,740.00</span>
          </p>

          <div className="mt-40">
            <button className="btn btn-ghost text-white bg-primary mr-5 px-10 text-medium">
              Buy Now
            </button>
            <button className="btn btn-ghost text-white bg-primary px-10 text-medium">
              Nearest Tester
            </button>
          </div>
        </div>
      </div>

      {/* hero section end for battery final page */}

      {/* product information section start */}
      <div className="w-4/5 mx-auto mb-10">
        <ProductInformation />
      </div>
      {/* product information section  end */}

      {/* Similar product section  Start */}
      <div className="">
        <SimilarProduct />
      </div>
      {/* Similar product section  End */}
    </section>
  );
};

export default ProductFinalPage;

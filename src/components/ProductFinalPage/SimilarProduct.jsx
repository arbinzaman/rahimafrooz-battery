// import Slider from "react-slick";
// import ProductImg1 from "../../assets/images/BatteryFinalPage/Product-01.png";
// import ProductImg2 from "../../assets/images/BatteryFinalPage/Product-02.png";

import RelatedProducts from "../ProductSearch/RelatedProducts";

// var settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
// };
const SimilarProduct = () => {
  return (
    <div className="mb-16 w-4/5 mx-auto">
  

      <RelatedProducts />
      {/* <Slider {...settings} >
        <div className="flex justify-center">
            <img src={ProductImg1} width={300} height={300} alt="" />
            <p className="text-2xl mt-5">Lucas Ultima Battery</p>
            <button className="btn btn-ghost border-primary rounded-none btn-sm px-5 text-primary">
              View Details
            </button>
          
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={ProductImg2} width={300} height={300} alt="" />
            <p className="text-2xl mt-5">Lucas Ultima Battery</p>
            <button className="btn btn-ghost border-primary rounded-none btn-sm px-5 text-primary">
              View Details
            </button>
          
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={ProductImg1} width={300} height={300} alt="" />
            <p className="text-2xl mt-5">Lucas Ultima Battery</p>
            <button className="btn btn-ghost border-primary rounded-none btn-sm px-5 text-primary">
              View Details
            </button>
          
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={ProductImg2} width={300} height={300} alt="" />
            <p className="text-2xl mt-5">Lucas Ultima Battery</p>
            <button className="btn btn-ghost border-primary rounded-none btn-sm px-5 text-primary">
              View Details
            </button>
          
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={ProductImg1} width={300} height={300} alt="" />
            <p className="text-2xl mt-5">Lucas Ultima Battery</p>
            <button className="btn btn-ghost border-primary rounded-none btn-sm px-5 text-primary">
              View Details
            </button>
          
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={ProductImg2} width={300} height={300} alt="" />
            <p className="text-2xl mt-5">Lucas Ultima Battery</p>
            <button className="btn btn-ghost border-primary rounded-none btn-sm px-5 text-primary">
              View Details
            </button>
          
        </div>

      </Slider> */}
      <h2 className="text-3xl text-primary font-normal mt-10">
        Best Price Commercial Vehicles Battery Online at RAHIMAFROOZ
      </h2>
      <p className="text-2xl text-semibold text-justify mt-5 ">
        Welcome to Rahimafrooz, your trusted source for high-performance bus and
        truck batteries that keep your commercial vehicles running smoothly for
        miles. We understand the need for uninterrupted operations to sustain
        and grow in this hyper-competitive business environment.
      </p>
      <div className="flex justify-center">
        <button className="rounded-md btn btn-md text-3xl bg-primary text-white mt-5  ">
          Download E-brochure
        </button>
      </div>
      <div>
        <ul className="list-disc text-2xl text-primary text-justify mt-5">
          <li>
            Total warranty includes pro-rata warranty. Please refer to the
            warranty card for terms and conditions.
          </li>
          <li>
            Battery image shown is only for reference. Actual image may vary.
          </li>
          <li>
            Updation of Application chart is a continuous process in Amara Raja.
            As a result battery recommendation may subject to change without
            prior notice
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SimilarProduct;

import { useNavigate } from "react-router-dom";

const Product = ({ productInfo }) => {
  const { imgurls, battery_name, short_code } = productInfo;
  const navigate = useNavigate();
  return (
    <section className="w-auto flex flex-col justify-center items-center mr-5 py-2">
      <div className="">
        <img src={imgurls[0]} alt="" className="w-80 h-60" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-small text-black my-2">{battery_name}</p>
        <button
          onClick={() => navigate(`/product-final-page/${short_code}`)}
          className="px-6 my-2 border border-button  text-xxsmall text-button"
        >
          VIEW DETAILS
        </button>
      </div>
    </section>
  );
};

export default Product;

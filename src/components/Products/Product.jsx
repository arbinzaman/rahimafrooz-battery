import { useNavigate } from "react-router-dom";

const Product = ({productInfo}) => {
    const {productImageSrc, productName } = productInfo;
    const navigate = useNavigate();
  return (
    <section className="w-auto flex flex-col justify-center items-center mr-5 py-2">
        <div className="border border-border_primary">
            <img src={productImageSrc} alt="" className=""/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-small text-black my-1">{productName}</p>
            <button onClick={()=>navigate("/product-final-page")} className="px-6 border border-button  text-xxsmall text-button">
                VIEW DETAILS
            </button>
        </div>
    </section>
  )
}

export default Product
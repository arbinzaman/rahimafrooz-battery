const Product = ({productInfo}) => {
    const {productImageSrc, productName } = productInfo;
  return (
    <section className="w-auto flex flex-col justify-center items-center mr-5">
        <div className="bg-base border border-border_primary">
            <img src={productImageSrc} alt="" className=""/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="text-regular my-1">{productName}</p>
            <button className="px-6 border border-button  text-xxsmall text-button">
                VIEW DETAILS
            </button>
        </div>
    </section>
  )
}

export default Product
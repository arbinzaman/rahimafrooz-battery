import RelatedProducts from "../ProductSearch/RelatedProducts";
import Brochure from "../../assets/Rahimafrooz.pdf"

const SimilarProduct = () => {
  return (
    <div className="mb-16">
      <RelatedProducts />
      <h2 className="text-medium text-primary ">
        Best Price Commercial Vehicles Battery Online at RAHIMAFROOZ
      </h2>
      <p className="text-regular text-black text-justify mt-5">
        Welcome to Rahimafrooz, your trusted source for high-performance bus and
        truck batteries that keep your commercial vehicles running smoothly for
        miles. We understand the need for uninterrupted operations to sustain
        and grow in this hyper-competitive business environment.
      </p>
      <div className="flex justify-center">
        <a download={Brochure} className="rounded-md btn btn-md text-regular bg-primary text-white mt-5  ">
          Download E-brochure
        </a>
      </div>
      <div>
        <ul className="list-disc text-regular text-primary text-justify mt-5">
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

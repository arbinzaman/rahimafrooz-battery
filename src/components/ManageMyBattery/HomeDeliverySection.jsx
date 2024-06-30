import { GiCarBattery } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiShoppingBag4Fill } from "react-icons/ri";
const HomeDeliverySection = () => {
  return (
    <div>
      <section className="m-4 md:m-8 text-primary">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Battery Home Delivery Service</h2>
          <p className="text-gray-400">
            Fast, reliable, and convenient battery delivery to your doorstep.
          </p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          <div className="flex flex-col items-center p-4">
            <GiCarBattery className="text-xlarge" />
            <h3 className="my-3 text-3xl font-semibold text-center">
              Wide Range of Batteries
            </h3>
            <div className="space-y-1 leadi text-center">
              <p>Find batteries for all your devices.</p>
              <p>AA, AAA, 9V, and more.</p>
              <p>High-quality and long-lasting.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <TbTruckDelivery className="text-xlarge" />
            <h3 className="my-3 text-3xl font-semibold">Fast Delivery</h3>
            <div className="space-y-1 leadi text-center">
              <p>Get your batteries delivered within 24 hours.</p>
              <p>Express and standard delivery options.</p>
              <p>Track your order in real-time.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <RiShoppingBag4Fill className="text-xlarge" />
            <h3 className="my-3 text-3xl font-semibold">Easy Returns</h3>
            <div className="space-y-1 leadi text-center">
              <p>Hassle-free returns within 30 days.</p>
              <p>100% satisfaction guaranteed.</p>
              <p>Easy return process and customer support.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <MdSecurity className="text-xlarge" />
            <h3 className="my-3 text-3xl font-semibold">Secure Payments</h3>
            <div className="space-y-1 leadi text-center">
              <p>Safe and secure payment options.</p>
              <p>Multiple payment methods accepted.</p>
              <p>Encryption to protect your data.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaHandHoldingHeart className="text-xlarge" />
            <h3 className="my-3 text-3xl font-semibold">Customer Support</h3>
            <div className="space-y-1 leadi text-center">
              <p>24/7 customer support.</p>
              <p>Expert advice and assistance.</p>
              <p>Chat, email, and phone support available.</p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <AiOutlineFileDone className="text-xlarge" />
            <h3 className="my-3 text-3xl font-semibold">Quality Assurance</h3>
            <div className="space-y-1 leadi text-center">
              <p>Top-quality batteries from leading brands.</p>
              <p>Strict quality control processes.</p>
              <p>Guaranteed performance and reliability.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDeliverySection;

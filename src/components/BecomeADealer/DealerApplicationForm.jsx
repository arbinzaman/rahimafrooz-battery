import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { generateCaptcha } from "../../utils/generateCaptcha";
import { TfiReload } from "react-icons/tfi";

const DealerApplicationForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = (data) => {
    try {
      console.log(data);
      if (data?.email != "" && captcha === data.captchaCode) {
        toast.success("Your record has been saved.");
      } else {
        toast.error("Please enter your details and captcha properly.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <form
        action=""
        ref={formRef}
        className="my-10 max-w-screen-2xl mx-10 lg:mx-auto"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <div>
            <input
              type="text"
              placeholder="Full Name*"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("fullName")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("companyName")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number*"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("phoneNumber")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("email")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="District*"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("district")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Thana"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("thana")}
            />
          </div>

          <div>
            <input
              type="number"
              placeholder="ZIP Code"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("zip")}
            />
          </div>
        </div>

        <div>
          <p className="text-primary text-sm font-medium mt-5 mb-3">
            Please type the captcha for security purposes.
          </p>
          <div className="md:flex md:items-center gap-7">
            <div>
              <input
                type="text"
                placeholder="Enter the code shown"
                className="bg-base border border-border_primary rounded-md p-1 mb-5"
                {...register("captchaCode")}
              />
            </div>

            <div className="flex items-center gap-4">
              <p className="bg-primary text-medium text-white font-bold text-center py-2 w-[150px]">
                {captcha}
              </p>
              <TfiReload
                color="#0d72b9"
                onClick={() => setCaptcha(generateCaptcha())}
              />
            </div>
          </div>
        </div>

        <button className="bg-button px-8 py-2 text-2xl text-base font-bold rounded-md">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default DealerApplicationForm;

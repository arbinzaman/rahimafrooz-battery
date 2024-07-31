import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { generateCaptcha } from "../../utils/generateCaptcha";
import { useRef, useState } from "react";
import { TfiReload } from "react-icons/tfi";
import axios from "axios";

const ContactUsInformationForm = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = async (data) => {
    try {
      const URL = `${import.meta.env.VITE_BASE_URL}/contact`;

      if (data.captchaCode === captcha) {
        const res = await axios.post(URL, data);
        console.log(res);
        toast.success("Thank your for getting in touch with us.");
        formRef.current.reset()
      } else {
        toast.error(
          "Captcha miss matched or invalid email provided! Please try again."
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="flex justify-center">
      <form
        action=""
        ref={formRef}
        className="my-5 max-w-screen-sm md:max-w-screen-md lg:w-full xl:max-w-screen-xl	2xl:max-w-screen-2xl"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div>
          <input
            type="text"
            placeholder="Enter your name*"
            required
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("customerName")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <div>
            <input
              type="text"
              placeholder="Enter your phone number*"
              required
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("phoneNo")}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email*"
              required
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("email")}
            />
          </div>
        </div>

        <div>
          <textarea
            required
            placeholder="Enter your message or question to us."
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("message")}
          ></textarea>
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

        <button className="bg-button px-8 py-2 my-3 text-2xl text-base font-bold rounded-md">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default ContactUsInformationForm;
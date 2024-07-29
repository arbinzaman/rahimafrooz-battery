import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { generateCaptcha } from "../../utils/generateCaptcha"; // Adjust the path as necessary
import { TfiReload } from "react-icons/tfi";

const DealerApplicationForm = () => {
  const { register, handleSubmit } = useForm();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState('');
  const url = `${import.meta.env.VITE_BASE_URL}/dealer-applications`;

  const handleFormSubmit = async (data) => {
    try {
      // Check if CAPTCHA is correct
      if (captchaInput !== captcha) {
        toast.error("CAPTCHA code is incorrect.");
        return;
      }

      // Check if required fields are filled
      if (data?.email === "") {
        toast.error("Please enter your proper details.");
        return;
      }

      // Send POST request
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("Your record has been saved.");
      // Reset CAPTCHA after successful submission
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
    } catch (error) {
      console.error(error.message);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <section>
      <form
        action=""
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
              type="text"
              placeholder="ZIP Code"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("zip")}
            />
          </div>
        </div>

        <div>
          <p className="text-primary text-sm font-medium mt-5 mb-3">
            Please type the characters you see in the image for security
            purposes.
          </p>
          <div className="md:flex items-center gap-7">
            <div>
              <input
                type="text"
                placeholder="Enter the code shown"
                className="bg-base border border-border_primary rounded-md p-1 mb-5"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
            </div>
            <div className="bg-primary text-2xl text-white p-4 mb-5">
              <p className="text-center font-medium">{captcha}</p>
            </div>
            <TfiReload
                color="#0d72b9"
                onClick={() => setCaptcha(generateCaptcha())}
              />
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

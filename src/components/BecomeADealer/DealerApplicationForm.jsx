import { useForm } from "react-hook-form";

const DealerApplicationForm = () => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section>
      <form
        action=""
        className="my-10 max-w-screen-sm md:max-w-screen-md lg:w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          <div>
            <input
              type="text"
              placeholder="Full Name*"
              className="border border-border_primary rounded-md p-1 w-full"
              {...register("fullName")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company Name"
              className="border border-border_primary rounded-md p-1 w-full"
              {...register("companyName")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone Number*"
              className="border border-border_primary rounded-md p-1 w-full"
              {...register("phoneNumber")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Email"
              className="border border-border_primary rounded-md p-1 w-full"
              {...register("email")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="District*"
              className="border border-border_primary rounded-md p-1 w-full"
              {...register("district")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Thana"
              className="border border-border_primary rounded-md p-1 w-full"
              {...register("thana")}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-border_primary rounded-md p-1 w-full"
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
                className="border border-border_primary rounded-md p-1 mb-5"
                {...register("captchaCode")}
              />
            </div>
            <div className="bg-primary text-2xl text-white p-4 mb-5">
              <p className="text-center font-medium">J23ndAjd4</p>
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

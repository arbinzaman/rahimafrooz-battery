import { useForm } from "react-hook-form";

const InformationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) =>{
    try {
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
  }

  return (
    <section>
      <form action="" className="mx-20 my-14" onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="border border-[#84E1EA] rounded-md p-2 w-full"
            {...register("fullName")}
          />
        </div>

        <div className="grid grid-cols-2 gap-5 my-5">
          <div>
            <input
              type="text"
              placeholder="Phone No"
              className="border border-[#84E1EA] rounded-md p-2 w-full"
              {...register("phoneNo")}
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="E-mail"
              className="border border-[#84E1EA] rounded-md p-2 w-full"
              {...register("email")}
            />
          </div>
        </div>

        <div>
          <textarea
            placeholder="Message"
            className="border border-[#84E1EA] rounded-md p-2 w-full"
            {...register("message")}
          ></textarea>
        </div>

        <div>
          <p className="text-primary text-sm font-medium mt-5 mb-3">
            Please type the characters you see in the image for security
            purposes.
          </p>
          <div className="flex items-center gap-7">
            <div>
              <input
                type="text"
                placeholder="Enter the code shown"
                className="border border-[#84E1EA] rounded-md p-2 w-[250px]"
                {...register("captchaCode")}
              />
            </div>
            <div className="bg-primary text-2xl text-white p-4 w-[300px]">
                <p className="text-center font-medium">J23ndAjd4</p>
            </div>
          </div>
        </div>

        <button className="bg-primary px-8 py-2 text-2xl text-base font-bold rounded-md">SUBMIT</button>
      </form>
    </section>
  );
};

export default InformationForm;

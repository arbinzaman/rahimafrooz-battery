import ErrorImage from "../../../assets/images/UiErrorPageGif/dino.gif";

const UiErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-full sm:p-16 bg-gray-900 text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
       <img src={ErrorImage} alt="ErrorImage" />
        </div>
      </section>
    </div>
  );
};

export default UiErrorPage;

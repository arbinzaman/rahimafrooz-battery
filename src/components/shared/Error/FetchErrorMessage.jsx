const FetchErrorMessage = () => {
  return (
    <div className="flex justify-center">
      <p className="text-primary text-xl lg:text-3xl text-center bg-background2 p-5 lg:p-10">
        Data fetch failed or something inconvenient occured! Please wait or try after a while.
        If not solved contact the developer team.
      </p>
    </div>
  );
};

export default FetchErrorMessage;

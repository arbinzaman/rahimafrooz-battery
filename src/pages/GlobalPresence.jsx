import Slider from "react-slick";

const GlobalPresence = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <section className="bg-background w-screen">
      <div className="grid grid-cols-2 gap-48 text-center lg:p-36 ">
        <div className="">
          <div>
            <h1 className="bg-primary text-base text-5xl font-bold py-1 mb-8">INTERNATIONAL OPERATIONS</h1>
            <p className="font-medium text-justify hyphens-auto text-2xl  mb-24">
              The global demand for lead-acid batteries, which is primarily
              driven by the automotive segment, remains robust, and the market
              is expected to further grow at a fast pace. The Asia Pacific, with
              its significant developments in the telecom, manufacturing, and
              construction industries, is leading the market growth. Amidst all
              this growth, there is a consistent demand for superior, long-last
            </p>
          </div>
          <div className="text-left">
            <h1 className="text-primary font-bold text-3xl">AUTOMOTIVE - GLOBAL</h1>
            <h1 className="text-3xl mb-8 tracking-[0.90em]" >PRESENCE</h1>
            <p className="font-medium text-2xl text-justify hyphens-auto">
              Rahimafrooz, with its cutting-edge technology and customer-centred
              services, is gaining dominance in the global automotive batteries
              market. With a stronghold in Bangladesh, our automotive batteries
              reach consumers in more than 52 countries across the world. Our
              dedicated investments in R&D and engineering have helped us
              enhance our technology, enabling a wider product range for
              consumers across the globe. For example, Rahimafrooz batteries
              perform twice as long as compared to other batteries in the dry
              and humid desert conditions of Northern America.
            </p>
          </div>
        </div>
        <div className="bg-primary">
          <Slider {...settings}>
            <div className=" text-base p-16" >
              <h3 className="text-xlarge mb-10">AFRICA</h3>
              <div className="grid grid-cols-2 mt-12 gap-10 text-medium text-left justify-items-center">
                <div className="flex flex-col gap-5">
                  <p>Algeria</p>
                  <p>Senegal</p>
                  <p>nigeria</p>
                  <p>Gabon</p>
                  <p>Botswana</p>
                  <p>Mozambique</p>
                  <p>Cango</p>
                  <p>Uganda</p>
                  <p>South Sudan</p>
                  <p>Ethiopia</p>
                </div>

                <div className="flex flex-col gap-5">
                  <p>Liberia</p>
                  <p>Lvory Coast</p>
                  <p>Cameroon</p>
                  <p>Angola</p>
                  <p>South Africa</p>
                  <p>Malawi</p>
                  <p>Tanzania</p>
                  <p>Kenya</p>
                  <p>Sudan</p>
                </div>
              </div>
            </div>
            <div className=" text-base p-16" >
              <h3 className="text-xlarge mb-10">ASIA</h3>
              <div className="grid grid-cols-2 mt-12 gap-10 text-medium text-left justify-items-center">
                <div className="flex flex-col gap-5">
                  <p>Bangladesh</p>
                  <p>India</p>
                  <p>nigeria</p>
                  <p>Gabon</p>
                  <p>Botswana</p>
                  <p>Mozambique</p>
                  <p>Cango</p>
                  <p>Uganda</p>
                  <p>South Sudan</p>
                  <p>Ethiopia</p>
                </div>

                <div className="flex flex-col gap-5">
                  <p>Liberia</p>
                  <p>Lvory Coast</p>
                  <p>Cameroon</p>
                  <p>Angola</p>
                  <p>South Africa</p>
                  <p>Malawi</p>
                  <p>Tanzania</p>
                  <p>Kenya</p>
                  <p>Sudan</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;

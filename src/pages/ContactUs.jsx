import GlobalAddressItems from "../components/ContactUs/GlobalAddressItems";
import LocationPinIcon from "../assets/icons/location-pin-svgrepo-com.png";
import PhoneFaxIcon from "../assets/icons/telephone-free-svgrepo-com.png";
import EmailIcon from "../assets/icons/email-9-svgrepo-com.png";
import InformationForm from "../components/ContactUs/InformationForm";
const ContactUs = () => {
  return (
    <section>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2014/04/02/14/09/world-map-306338_960_720.png"
          className="w-full h-[300px]"
          alt=""
        />
      </div>
      <p className="text-2xl font-semibold text-center text-primary my-3">
        CONTACT US
      </p>

      <div>
        <InformationForm/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-20">
        <div className="bg-slate-100 p-5 rounded-xl">
          <GlobalAddressItems
            addressDetails={{
              imgLink: LocationPinIcon,
              itemName: "Global Head Office",
              itemHeading: "Rahimafrooz Storage Power Business:",
              itemText: "705West Nakhalpara, Tejgaon Dhaka -1205, Bangladesh.",
            }}
          />

          <GlobalAddressItems
            addressDetails={{
              imgLink: PhoneFaxIcon,
              itemName: "Phone / Fax",
              itemHeading: "Customer Support:",
              itemText: "+880 2 9113696,+880 2 58153128",
            }}
          />

          <GlobalAddressItems
            addressDetails={{
              imgLink: EmailIcon,
              itemName: "Email",
              itemHeading: "",
              itemText: "battery@rahimafrooz.com",
            }}
          />
        </div>

        <div className="bg-slate-100 p-5 rounded-xl">
          <GlobalAddressItems
            addressDetails={{
              imgLink: LocationPinIcon,
              itemName: "UAE Office",
              itemHeading: "Globatt India Pvt. Ltd:",
              itemText: "1102, Ithum Tower 1A-40, Sector 62, Noida - 201301 (U.P.), India",
            }}
          />

          <GlobalAddressItems
            addressDetails={{
              imgLink: PhoneFaxIcon,
              itemName: "Phone / Fax",
              itemHeading: "Customer Support:",
              itemText: "+91 9650003663",
            }}
          />

          <GlobalAddressItems
            addressDetails={{
              imgLink: EmailIcon,
              itemName: "Email",
              itemHeading: "",
              itemText: "gipl@rahimafrooz.com",
            }}
          />
        </div>

        <div className="bg-slate-100 p-5 rounded-xl">
          <GlobalAddressItems
            addressDetails={{
              imgLink: LocationPinIcon,
              itemName: "EMEA Office (Europe Middle East & Africa)",
              itemHeading: "Lebang Automotive FCO:",
              itemText: "106, Techono-Hub 2, Silicon Oasis, PO Box-13667, Dubai UAE",
            }}
          />

          <GlobalAddressItems
            addressDetails={{
              imgLink: PhoneFaxIcon,
              itemName: "Phone / Fax",
              itemHeading: "Customer Support:",
              itemText: "+97143440522-3",
            }}
          />

          <GlobalAddressItems
            addressDetails={{
              imgLink: EmailIcon,
              itemName: "Email",
              itemHeading: "",
              itemText: "lebang@rahimafrooz.com",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

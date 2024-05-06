import GlobalAddressItems from "../components/ContactUs/GlobalAddressItems";
import LocationPinIcon from "../assets/icons/location-pin-svgrepo-com.png";
import PhoneFaxIcon from "../assets/icons/telephone-free-svgrepo-com.png";
import EmailIcon from "../assets/icons/email-9-svgrepo-com.png";
import ContactUsInformationForm from "../components/ContactUs/ContactUsInformationForm";
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
      <section className="mx-2 md:mx-16 lg:mx-20">
        <p className="text-primary text-large font-bold text-center my-3">
          CONTACT US
        </p>
        <div>
          <ContactUsInformationForm />
        </div>
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:mx-auto max-w-screen-sm md:max-w-screen-md	lg:max-w-screen-lg xl:max-w-screen-xl	2xl:max-w-screen-2xl">
          <div className="bg-slate-100 p-5 rounded-xl">
            <GlobalAddressItems
              addressDetails={{
                imgLink: LocationPinIcon,
                itemName: "Global Head Office",
                itemHeading: "Rahimafrooz Storage Power Business:",
                itemText:
                  "705West Nakhalpara, Tejgaon Dhaka -1205, Bangladesh.",
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
                itemText:
                  "1102, Ithum Tower 1A-40, Sector 62, Noida - 201301 (U.P.), India",
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
                itemText:
                  "106, Techono-Hub 2, Silicon Oasis, PO Box-13667, Dubai UAE",
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
    </section>
  );
};

export default ContactUs;

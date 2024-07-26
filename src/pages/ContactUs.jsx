import { useQuery } from "@tanstack/react-query";
import GlobalAddressItems from "../components/ContactUs/GlobalAddressItems";
import LocationPinIcon from "../assets/icons/location-pin-svgrepo-com.png";
import PhoneFaxIcon from "../assets/icons/telephone-free-svgrepo-com.png";
import EmailIcon from "../assets/icons/email-9-svgrepo-com.png";
import ContactUsInformationForm from "../components/ContactUs/ContactUsInformationForm";
import ContactUsGoogleMap from "../components/ContactUs/ContactUsGoogleMap";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import Loader from "../components/shared/Loaders/Loader";

const ContactUs = () => {
  const GLOBAL_LOCATION_API_URL = `${
    import.meta.env.VITE_BASE_URL
  }/contact/global-locations`;

  const {
    data: globalLocations = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["globalLocations"],
    queryFn: async () => {
      const res = await fetch(GLOBAL_LOCATION_API_URL);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    refetchInterval: 60000,
    refetchOnWindowFocus: true,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section>
      <div>
        <ContactUsGoogleMap />
      </div>
      <section className={allDeviceMaxWidth + " my-10"}>
        <p className="text-primary text-center text-medium lg:text-large font-bold uppercase">
          CONTACT US
        </p>
        <div>
          <ContactUsInformationForm />
        </div>
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {globalLocations.map((location) => (
            <div key={location.id} className="bg-slate-100 p-5 rounded-xl">
              <GlobalAddressItems
                addressDetails={{
                  imgLink: LocationPinIcon,
                  itemName: location.location_title,
                  itemHeading: "",
                  itemText: location.location,
                }}
              />
              <GlobalAddressItems
                addressDetails={{
                  imgLink: PhoneFaxIcon,
                  itemName: "Phone / Fax",
                  itemHeading: "",
                  itemText: location.phone_numbers,
                }}
              />
              <GlobalAddressItems
                addressDetails={{
                  imgLink: EmailIcon,
                  itemName: "Email",
                  itemHeading: "",
                  itemText: location.email,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ContactUs;

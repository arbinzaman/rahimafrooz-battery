import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/shared/Loaders/Loader';
import { allDeviceMaxWidth } from '../../styles/maxWidth';
import ManufacturingBanner from '../../assets/images/AboutPage/Manufacturing/Manufacturing.png';

const Manufacturing = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/manufacturing-locations`;

  const { data: manufacturing = [], isLoading, error } = useQuery({
    queryKey: ['manufacturing'],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      return data;
    },
    // refetchOnWindowFocus: true, // Uncomment if you want to refetch on window focus
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <div>
        <img src={ManufacturingBanner} alt="Manufacturing Banner" />
      </div>
      <section className={`${allDeviceMaxWidth} grid grid-cols-1 lg:grid-cols-2 gap-20 items-start my-5 text-justify`}>
        {manufacturing.map((location) => (
          <section key={location.id}>
            <div className="grid mt-20 lg:mt-32 lg:mb-44">
              <div>
                <img src={location.imageurl} alt={location.title} width="100%" />
              </div>
              <div className="text-primary mt-10">
                <p className="font-semibold">{location.title}</p>
                <p>{location.location}</p>
              </div>
              <p className="my-10 text-black">
                {location.description}
              </p>
              <p className="border border-b-primary"></p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Manufacturing;

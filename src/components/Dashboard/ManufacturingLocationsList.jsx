import { useEffect, useState } from "react";
import axios from "axios";

const ManufacturingLocationsList = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/manufacturing-locations`)
      .then((res) => {
        setDetails(res.data);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th>
                <input type="checkbox" className="bg-white border-0" />
              </th>
              <th>Serial</th>
              <th>Title</th>
              <th>Location</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {details.map((location, i) => (
              <tr key={location.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <th>{i + 1}</th>
                <td>{location.title}</td>
                <td>{location.location}</td>
                <td>{location.description}</td>
                <td>
                  <img src={location.imageurl} alt="" className="h-1/2" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManufacturingLocationsList;

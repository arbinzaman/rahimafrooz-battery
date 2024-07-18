import ManufacturingLocationsList from "../../components/Dashboard/ManufacturingLocationsList";

const ManufacturingLocations = () => {
  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        All Manufacturing Locations
      </h1>
      <ManufacturingLocationsList />
    </div>
  );
};

export default ManufacturingLocations;

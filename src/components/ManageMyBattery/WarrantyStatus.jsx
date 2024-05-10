const WarrantyStatus = ({warrantyInformation}) => {
  console.log(warrantyInformation)
  return (
    warrantyInformation?.isVerified && (
      <section className="bg-primary p-16">
        <div className="bg-[#deebf6] text-primary p-5 rounded-xl">
          <p className="text-center text-medium font-bold mt-1 mb-4">
            WARRIENTY INFORMATION
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-regular gap-2  ">
            <p>Name : {warrantyInformation?.name}</p>
            <p>Phone Number : {warrantyInformation?.phoneNumber}</p>
            <p>Product Serial Number : {warrantyInformation?.serialNumber}</p>
            <p>
              Vehicle/Device/Application : {warrantyInformation?.vehicleType}
            </p>
            <p>Purchase Date : {warrantyInformation?.purchaseDate}</p>
            <p>Purchase DLR : {warrantyInformation?.purchaseDLR}</p>
            <p>
              Warranty Period - Remaining Days :{" "}
              {warrantyInformation?.remainingDays}
            </p>
            <p>Battery Type : {warrantyInformation?.batteryType}</p>
          </div>
        </div>
      </section>
    )
  );
};

export default WarrantyStatus;

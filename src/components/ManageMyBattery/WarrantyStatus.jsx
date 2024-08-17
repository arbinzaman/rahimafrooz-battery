const calculateRemainingTime = (targetDate) => {
  const target = new Date(targetDate);
  const today = new Date();

  if (target < today) {
    return "The date has already passed.";
  }

  let years = target.getFullYear() - today.getFullYear();
  let months = target.getMonth() - today.getMonth();
  let days = target.getDate() - today.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${years} years, ${months} months and ${days} days remaining.`;
};

const WarrantyStatus = ({ warrantyInformation }) => {
  const remainingWarranty = calculateRemainingTime(
    warrantyInformation?.warranty_deadline?.split("T")[0]
  );
  return (
    <section className="bg-primary p-16">
      <div className="bg-[#deebf6] text-primary p-5 rounded-xl">
        <p className="text-center text-medium font-bold mt-1 mb-4">
          WARRIENTY INFORMATION
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 text-regular gap-2  ">
          <p>Name : {warrantyInformation?.name}</p>
          <p>Phone Number : {warrantyInformation?.phone_number}</p>
          <p>Product Short Code : {warrantyInformation?.short_code}</p>
          <p>
            Vehicle/Device/Application : {warrantyInformation?.vehicle_type}
          </p>
          <p>
            Purchase Date : {warrantyInformation?.purchase_date?.split("T")[0]}
          </p>
          <p>Purchase DLR : {warrantyInformation?.purchase_dlr}</p>
          <p>Total Warranty: {warrantyInformation?.total_warranty} months</p>
          <p>Warranty Period : {remainingWarranty}</p>
        </div>
      </div>
    </section>
  );
};

export default WarrantyStatus;

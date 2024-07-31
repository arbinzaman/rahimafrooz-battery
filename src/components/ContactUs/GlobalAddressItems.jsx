const GlobalAddressItems = ({ addressDetails }) => {
  const { imgLink, itemName, itemHeading, itemText } = addressDetails;
  return (
    <section>
      <div className="my-3">
        <div className="flex items-center text-lg gap-2">
          <img src={imgLink} className="w-[20px]" alt="" />
          <p className="text-primary text-regular font-medium">{itemName}</p>
        </div>
        <div className="text-small">
          <p>
            <span className="font-medium">{itemHeading}{itemHeading !=="" && <span>:</span>}</span> {itemText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalAddressItems;

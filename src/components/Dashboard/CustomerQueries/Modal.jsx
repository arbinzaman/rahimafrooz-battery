const Modal = ({ customersQuery }) => {
  const { fullName, email, phoneNo, message ,messaged_at} = customersQuery;

  return (
    <div className="modal-box shadow-none bg-background text-black">
      <h3 className="font-bold text-lg">Contact Details</h3>
      <div className="flex flex-col gap-4">
        <div>
          <label className="font-bold">Full Name:</label>
          <p>{fullName}</p>
        </div>
        <div>
          <label className="font-bold">Email:</label>
          <p>{email}</p>
        </div>
        <div>
          <label className="font-bold">Phone Number:</label>
          <p>{phoneNo}</p>
        </div>
        <div>
          <label className="font-bold">Message:</label>
          <p>{message}</p>
        </div>
        <div>
          <label className="font-bold">Messaged at:</label>
          <p>{messaged_at}</p>
        </div>
      </div>
      <div className="modal-action">
        <form method="dialog">
          <button className="btn btn-xs bg-sky-400 border-0 text-black hover:bg-red-500 hover:text-white">Close</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;

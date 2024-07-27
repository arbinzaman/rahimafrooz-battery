import { useState, useEffect } from "react";

const CertificateUpdateModal = ({
  dataId,
  onClose,
  onUpdate,
  updatedData,
}) => {
  const [updateCertificateData, setUpdateCertificateData] =
    useState(updatedData);
//   const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
  });

  const currentTimestamp = new Date()
  .toISOString()
  .slice(0, 19)
  .replace("T", " ");

const dataWithTimestamp = {
  ...formData,
  created_at: currentTimestamp,
};

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/certificates/${dataId}`
      );
      const data = await res.json();
      setFormData(data);
    };
    fetchData();
  }, [dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateCertificateData((prevCertificateData) => ({
      ...prevCertificateData,
      [name]: value,
    }));
  };
  console.log(updateCertificateData);
  const handleSubmit = async (e) => {
    dataWithTimestamp
    e.preventDefault();
    // setLoading(true);
    try {
      await onUpdate(updateCertificateData);
      onClose(); // Close the modal on successful update
    } catch (error) {
      console.error("Error updating location:", error);
    } finally {
      // setLoading(false);
    }
  };
  const handleImgUrl = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      image_url: fileUrls[0],
    });
  };

  return (
    <dialog open className="modal ">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">Update Manufacturing Data</h3>
   
        <form key={updateCertificateData.id} onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                value={updateCertificateData.title || ""}
                onChange={handleChange}
                className="input w-full bg-white text-black border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-small text-gray-800 pb-1">
                Upload Image
              </label>
              <input
                type="file"
                name="image_url"
                // value={updateCertificateData.image_url || ""}
                onChange={handleImgUrl}
                className="file-input w-full max-w-xs input-sm rounded-sm bg-white text-black max-h-10 "
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-xs bg-teal-500 text-white btn-ghost border-0 hover:bg-teal-700 "
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-xs bg-red-600 text-white border-0 btn-ghost hover:bg-red-700  "
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
      </div>
    </dialog>
  );
};

export default CertificateUpdateModal;

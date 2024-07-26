import  { useState, useEffect } from 'react';

const UpdateManufacturingDataModal = ({ dataId, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    imageurl: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contact/global-locations/${dataId}`);
      const data = await res.json();
      setFormData(data);
    };
    fetchData();
  }, [dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <dialog open className="modal bg-white">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Update Manufacturing Data</h3>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea w-full"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block">Image URL</label>
            <input
              type="text"
              name="imageurl"
              value={formData.imageurl}
              onChange={handleChange}
              className="input w-full"
              required
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn">Update</button>
            <button type="button" className="btn" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateManufacturingDataModal;

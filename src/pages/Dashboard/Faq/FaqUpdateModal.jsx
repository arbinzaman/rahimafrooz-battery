import { useState, useEffect } from "react";

const FaqUpdateModal = ({ dataId, onClose, onUpdate, updatedData }) => {
  const [updateFaqData, setUpdateFaqData] = useState(updatedData);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });
  console.log(formData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/faqs/${dataId}`);
      const data = await res.json();
      setFormData(data);
    };
    fetchData();
  }, [dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateFaqData((prevFaqData) => ({
      ...prevFaqData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(updateFaqData);
      onClose(); // Close the modal on successful update
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">Update FAQ</h3>

        <form key={updateFaqData.id} onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block">Question</label>
            <input
              type="text"
              name="question"
              value={updateFaqData.question || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Answer</label>
            <input
              type="text"
              name="answer"
              value={updateFaqData.answer || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-xs bg-teal-500 text-white btn-ghost border-0 hover:bg-teal-700"
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-xs bg-red-600 text-white border-0 btn-ghost hover:bg-red-700"
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

export default FaqUpdateModal;

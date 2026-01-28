import { RiCloseLine } from "react-icons/ri";
import { useState } from "react";

const AskQuestionModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white dark:bg-black w-full max-w-md rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black dark:hover:text-white"
        >
          <RiCloseLine />
        </button>

        <h2 className="text-lg font-semibold mb-4">Ask another question</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
            required
          />

          <textarea
            name="question"
            placeholder="Describe your issue..."
            rows="4"
            value={formData.question}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-black resize-none"
            required
          />

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium"
          >
            Submit query
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskQuestionModal;

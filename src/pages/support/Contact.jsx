import { useState } from "react";
import PageHeader from "../../components/PageHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="space-y-8">
        <PageHeader
          headerTitle="Contact Us"
          headerSubtitle="Contact Us through following."
        />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="px-4 py-2 rounded-xl border text-black dark:text-white bg-white dark:bg-black dark:border-gray-800">
          <p className="text-xs text-gray-500">Email</p>
          <p className="font-medium">support@example.com</p>
        </div>

        <div className="px-4 py-2 rounded-xl border text-black dark:text-white bg-white dark:bg-black dark:border-gray-800">
          <p className="text-xs text-gray-500">Phone</p>
          <p className="font-medium">090078601</p>
        </div>

        <div className="px-4 py-2 rounded-xl border text-black dark:text-white bg-white dark:bg-black dark:border-gray-800">
          <p className="text-xs text-gray-500">Response Time</p>
          <p className="font-medium">Within 24 hours</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border bg-transparent dark:border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg border bg-transparent dark:border-gray-700"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border bg-transparent dark:border-gray-700"
        />

        <textarea
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full px-4 py-2 rounded-lg border bg-transparent dark:border-gray-700 resize-none"
        />

        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

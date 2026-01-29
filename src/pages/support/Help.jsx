import { useState } from "react";
import faqs from "../../data/helpData.json";
import AskQuestionButton from "../../components/Help/AskQuestionButton";
import AskQuestionModal from "../../components/Help/AskQuestionModal";
import PageHeader from "../../components/PageHeader";

const categories = [
  {
    id: 1,
    title: "Orders & Payments",
    desc: "Track orders, invoices, refunds",
  },
  { id: 2, title: "Shipping", desc: "Delivery timelines & locations" },
  { id: 3, title: "Returns", desc: "Return & refund policies" },
  { id: 4, title: "Account", desc: "Login, security & profile" },
];

const Help = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="space-y-10">
      <PageHeader
        headerTitle="Help Center"
        headerSubtitle="Find answers to common questions and issues"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4 hover:shadow-md transition cursor-pointer"
          >
            <h3 className="font-semibold text-black dark:text-white">
              {cat.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-white mt-1">
              {cat.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white dark:bg-black border text-black dark:text-white border-gray-200 dark:border-gray-800 rounded-xl p-4"
          >
            <button
              onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
              className="w-full text-left font-medium flex justify-between items-center"
            >
              {faq.question}
              <span className="text-xl">
                {activeFaq === faq.id ? "−" : "+"}
              </span>
            </button>

            {activeFaq === faq.id && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center space-y-3">
        <h3 className="font-semibold text-lg text-black dark:text-white">
          Still need help?
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Can’t find what you’re looking for? Our support team is ready to help.
        </p>
        <AskQuestionButton onOpen={() => setOpenModal(true)} />
      </div>

      <AskQuestionModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Help;

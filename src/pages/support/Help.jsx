import { useState } from "react";
import faqs from "../../data/helpData.json"
import AskQuestionButton from "../../components/Help/AskQuestionButton";
import AskQuestionModal from "../../components/Help/AskQuestionModal";
import PageHeader from "../../components/PageHeader";

const Help = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="space-y-8">
      <PageHeader
        headerTitle="Help Center"
        headerSubtitle="Find answers to common questions and issues"
      />
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-4"
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
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <AskQuestionButton onOpen={() => setOpenModal(true)} />
      </div>
      <AskQuestionModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Help;

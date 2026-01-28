const AskQuestionButton = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="px-5 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition"
    >
      Ask another question
    </button>
  );
};

export default AskQuestionButton;

const Pagination = ({ handlePrevPage, currPage, handleNextPage }) => {
  return (
    <div className="flex justify-start items-center gap-4 ml-3 my-5">
      <button
        className="px-3 py-1 cursor-pointer border border-gray-400 rounded-md"
        onClick={handlePrevPage}
      >
        Prev
      </button>
      <p>{currPage}</p>
      <button
        className="px-3 py-1 cursor-pointer border border-gray-400 rounded-md"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

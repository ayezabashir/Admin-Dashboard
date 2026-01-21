import React from 'react'
import { BsPerson } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';

const AdminModalBox = () => {
  return (
    <div className="border border-gray-400 min-w-50 rounded-2xl max-h-50 p-3 bg-white dark:bg-black">
      <div className="flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md mb-4">
        <BsPerson className=" text-black dark:text-white" />
        <p className="text-black dark:text-white text-sm">Account</p>
      </div>
      <div className="flex gap-2 items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md mb-4">
        <CiSettings className=" text-black dark:text-white" />
        <p className="text-black dark:text-white text-sm">Settings</p>
      </div>
      <button className="px-2 py-1 rounded-md text-sm bg-red-600 cursor-pointer text-white w-full">
        Sign Out
      </button>
    </div>
  );
}

export default AdminModalBox
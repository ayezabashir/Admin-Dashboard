const Notification = ({ notif_person, notif_heading, notif_time }) => {
  return (
    <div className="flex gap-3 items-center border-b pb-3 border-gray-500 dark:border-gray-50 ">
      <img className="rounded-full" width="40" height="40" src={notif_person} alt="" />
      <div className=" flex flex-col gap-1">
        <h2 className="text-sm font-semibold text-black dark:text-white">
          {notif_heading}
        </h2>
        <p className="text-sm text-black dark:text-white">{notif_time}</p>
      </div>
    </div>
  );
};

export default Notification;

import Notification from "./Notification";
import man1 from "/person.jpg"
const notifs = [
  {
    notif_person: man1,
    notif_head: "Tom Watson mentioned you in Logo redesign",
    notif_time: "12:36am",
  },
  {
    notif_person: man1,
    notif_head: "Emma Watson sent you message groupchat",
    notif_time: "09:30pm",
  },
  {
    notif_person: man1,
    notif_head: "Elena Watson mentioned you in redesign",
    notif_time: "02:00am",
  },
];
const NotificationModalBox = () => {
  return (
    <div className="border border-gray-400 min-w-90 max-w-100 overflow-y-auto rounded-2xl max-h-50 p-5 bg-white dark:bg-black">
      <div className="flex flex-col gap-5">
        {notifs.map((notif, index) => (
          <Notification
            key={index}
            notif_person={notif.notif_person}
            notif_heading={notif.notif_head}
            notif_time={notif.notif_time}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationModalBox;

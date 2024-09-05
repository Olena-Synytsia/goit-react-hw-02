import s from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={s.container}>
      <p className={s.text}> {message}</p>
    </div>
  );
};

export default Notification;

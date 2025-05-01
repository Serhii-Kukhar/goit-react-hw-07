import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => {
    const filter = state.filters.name.toLowerCase();
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  });

  return (
    <div className={s.listBox}>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

import ElementContact from "components/ElementContact/ElementContact";
import css from './Contacts.module.css'
const Contacts = ({contactList, handleDelete}) => {
    return (
        <>
            <ul>
                {
                    contactList.map((contact) => (
                        <ElementContact contact={contact} key={contact.id} >
                           <button className={css.deluser} onClick={handleDelete} type="button">Delete</button>
                        </ElementContact>
                    ))}
            </ul>
        </>
    )
};
export default Contacts;
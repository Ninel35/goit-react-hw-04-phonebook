const ElementContact = ({contact, children}) => {
    return (
        <li id={contact.id} > {contact.name}   {contact.number}
           {children}
        </li>
     
    )
};
export default ElementContact;
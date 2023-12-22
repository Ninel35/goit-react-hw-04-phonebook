import React, { useEffect, useState } from 'react'
import Filter from './Filter/Filter'
import Contacts from './Contacts/Contacts'
import FormUser  from './FormUser/FormUser'

export const App = () => {

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? [])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  
  const sendUserData = (data) => {
    setContacts((prev) => {
      if (prev.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())) {
        alert(data.name + " is already in contacts")
        return;
      }
      return [...prev, data]
    })
  }

    const handlerFilter = (evt) => {
      setFilter(evt.target.value)
  };
    
  
  const handleDelete = (evt) => {
      setContacts((prev) => {
        return prev.filter(item => {
          return item.id !== evt.target.parentElement.id
        })
      })
  }
  
    const getVisibleContacts = () => {
      
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }



    return (
      <>
        <h1>Phonebook</h1>
        <FormUser sendUserData={sendUserData} />
        <h2>Contacts</h2>
        <Filter handlerFilter={handlerFilter} />
        <Contacts contactList={getVisibleContacts()}
          handleDelete={handleDelete} />
      </>
    )
  }

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from 'components/App.styled';
import { fetchContacts } from 'redux/contactsThunk';
import {
  selectContacts,
  selectLoadingStatus,
  selectErrorStatus,
} from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();

  const itemsList = useSelector(selectContacts);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorStatus);
  console.log(error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error !== null && (
        <p style={{ color: 'red', fontWeight: 700, fontSize: 20 }}>
          Something gone wrong, please try again! / Add DB URL
        </p>
      )}
      {isLoading && !error && <p>Loading, please wait...</p>}
      {itemsList.length > 0 && <ContactList />}
      {itemsList.length === 0 && <p>You don`t have any contacts yet</p>}
    </Wrapper>
  );
}

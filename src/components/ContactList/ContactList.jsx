import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Text, Button } from 'components/ContactList/ContactList.styled';
import { deleteContact } from 'redux/contactsThunk';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <Text>
            {name}: {phone}
          </Text>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

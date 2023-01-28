import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectFilteredContacts } from 'redux/selectors';
import { Text, Button } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </li>
      ))}
    </ul>
  );
};

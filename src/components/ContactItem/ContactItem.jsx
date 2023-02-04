import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Item, Text, Button } from 'components/ContactItem/ContactItem.styled';
import { deleteContact } from 'redux/contactsThunk';

export const ContactItem = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return filteredContacts.map(({ id, name, phone }) => (
    <Item key={id}>
      <Text>
        {name}, tel. {phone}
      </Text>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Item>
  ));
};

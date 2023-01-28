export const selectFilteredContacts = state => {
  return state.contacts.contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(state.filter.filter.toLowerCase());
  });
};

export const getContacts = state => state.contacts.contacts;

export const getFilteredContacts = state => state.filter.filter;

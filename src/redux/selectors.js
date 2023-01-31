export const selectFilteredContacts = state => {
  return state.contacts.items.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(state.filter.filter.toLowerCase());
  });
};

export const selectContacts = state => state.contacts.items;

export const selectFilterContacts = state => state.filter.filter;

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectErrorStatus = state => state.contacts.error;

export const selectFilteredContacts = state => {
  return state.contacts.items.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(state.filter.filter.toLowerCase());
  });
};

export const getContacts = state => state.contacts.items;

export const getFilteredContacts = state => state.filter.filter;

export const getLoadingStatus = state => state.contacts.isLoading;

export const getErrorStatus = state => state.contacts.error;

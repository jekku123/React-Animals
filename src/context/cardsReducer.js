export const cardsReducer = (state, action) => {
  const { name, value } = action.payload;

  switch (action.type) {
    case 'ADD':
      if (name.length > 0) {
        if (!state.some((card) => card.name === name)) {
          return [{ name: name.toLowerCase(), likes: 0 }, ...state];
        }
      }
      return state;

    case 'REMOVE':
      return state.filter((card) => card.name !== name);

    case 'HANDLE_LIKES':
      return state.map((card) => {
        if (card.name === name) {
          return {
            ...card,
            likes: card.likes + Number(value),
          };
        }
        return card;
      });

    default:
      return;
  }
};

export const animalsReducer = (state, action) => {
  const { name, value } = action.payload;

  switch (action.type) {
    case 'ADD':
      if (name.length > 0) {
        if (!state.some((animal) => animal.name === name)) {
          return [{ name: name.toLowerCase(), likes: 0 }, ...state];
        }
      }
      return state;

    case 'REMOVE':
      return state.filter((animal) => animal.name !== name);

    case 'HANDLE_LIKES':
      return state.map((animal) => {
        if (animal.name === name) {
          return {
            ...animal,
            likes: animal.likes + Number(value),
          };
        }
        return animal;
      });

    default:
      return;
  }
};

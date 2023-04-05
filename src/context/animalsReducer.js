export const animalsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (action.payload.length > 0) {
        if (!state.some((animal) => animal.name === action.payload)) {
          return [{ name: action.payload.toLowerCase(), likes: 0 }, ...state];
        }
      }
      return state;

    case 'REMOVE':
      return state.filter((animal) => animal.name !== action.payload);

    case 'HANDLE_LIKES':
      return state.map((animal) => {
        if (animal.name === action.payload.name) {
          return {
            ...animal,
            likes: animal.likes + Number(action.payload.value),
          };
        }
        return animal;
      });

    default:
      return;
  }
};

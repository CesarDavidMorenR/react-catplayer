const playlist = [];

const handlePlay = (state = playlist, action) => {
  const music = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product already exists
      const exist = state.find((x) => x.id === music.id);
      if (exist) {
        // Increase the quantity
        return state.map((x) =>
          x.id === music.id ? { ...x, qty: x.qty } : x
        );
      } else {
        const music = action.payload;
        return [
          ...state,
          {
            ...music,
            qty: 1,
          },
        ];
      }
      break;

    case "DELITEM":
      const exist1 = state.find((x) => x.id === music.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === music.id ? { ...x, qty: x.qty } : x
        );
      }
      break;

    default:
      return state;
      break;
  }
};

export default handlePlay;
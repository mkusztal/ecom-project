export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      console.error("Invalid serializedState in Cart");
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error: ", err);
    localStorage.removeItem("state");
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Error: ", err);
    return undefined;
  }
};

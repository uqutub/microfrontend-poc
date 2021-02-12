export const actionDispatch = (type, payload) => {
  return payload ? { type, payload } : { type };
};
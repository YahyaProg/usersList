
export const getEditPerson = (id) => {
  return async (dispatch, getState) => {
    const persons = getState().Values;
    const personEdit = persons.filter((person) => {
      return person.id === id;
    });
    console.log("persons-action", personEdit);
    await dispatch({ type: "GET_PERSON_EDIT", payload: personEdit[0] });
  };
};

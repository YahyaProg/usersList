// import {
//   registerUser,
//   loginUser,
//   getUsers,
//   addUser,
//   updateUser,
//   deleteUser,
// } from "../../cervices/userService";
import { initioaPersons } from "../../utils/initPersons";
export const initioalPersons = () => {
  return async (dispatch, getState) => {
    let Persons;
    const cart = localStorage.getItem("persons");
    console.log("cart", cart);
    if (cart) {
      Persons = [...JSON.parse(cart)];
    } else {
      Persons = [...initioaPersons];
    }
    await dispatch({ type: "GET_VALUES", payload: Persons });
  };
};

export const AddUser = (values) => {
  return async (dispatch, getState) => {
    // If there was a server 
    // const {response}=await addUser(values)
    // if(response.ok===true){
    //   toast.success("کاربر با موفقیت اضافه شد", {
    //     position: "top-right",
    //     closeOnClick: true,
    //   });
    // }else{
    //   toast.error("مشکلی پیش امده", {
    //     position: "top-right",
    //     closeOnClick: true,
    //   });
    // }

    const Values = getState().Values;
    const {
      firstName,
      lastName,
      email,
      age,
      city,
      gender,
      phNumber,
      password,
    } = values;
    let role;

    const newItem = {
      id: Math.floor(Math.random() * 13000000),
      role: role,
      firstName,
      lastName,
      email,
      age,
      city,
      gender,
      phNumber,
      password,
    };
    const stateValues = Values.push(newItem);

    await dispatch({ type: "GET_VALUES", payload: [...stateValues] });
  };
};
export const SearchValues = (search) => {
  console.log(search);
  return async (dispatch, getState) => {
    const Persons = getState().Values;
    let SearchPersons;
    if (!search || search === "" || search === " ") {
      SearchPersons = Persons;
    } else {
      SearchPersons = Persons.filter((person) => {
        return person.lastName.startsWith(search);
      });
    }
    console.log(SearchPersons);
    await dispatch({ type: "SEARCH_VALUE", payload: [...SearchPersons] });
  };
};

export const DeletePerson = (id) => {
  return async (dispatch, getState) => {
    //  ( //If there was a server
    //   // const {updateUsers}=await deleteUser(id)
    //   // await dispatch({ type: "DELETE_ACTION", payload: [...updateUsers] }))

    const Persons = getState().Values;
    const persons = [...Persons];
    const editFilteres = persons.filter((person) => {
      return person.id !== id;
    });
    await dispatch({ type: "DELETE_ACTION", payload: [...editFilteres] });
  };
};

export const EditPersons = (value) => {
  return async (dispatch, getState) => {
    // if there was a server
    // const {updateUsers}=await updateUser(id , value),
    // await dispatch({ type: "EDIT_VALUE", payload: updateUsers });
    const values = getState().Values;
    const persons = [...values];
    const personIndex = persons.findIndex((p) => p.id === value.id);
    let person = persons[personIndex];
    person = value;
    persons[personIndex] = person;
    console.log(persons);
    await dispatch({ type: "EDIT_VALUE", payload: persons });
  };
};

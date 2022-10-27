import http from "./httpServices";
const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

export const registerUser = (user) => {
  return http.post(`${baseUrl}/register`, JSON.stringify(user));
};

export const loginUser = (user) => {
  return http.post(`${baseUrl}/authenticate`, JSON.stringify(user));
};

export const getUsers = () => {
  return http.get(`${baseUrl}`);
};

export const addUser=(user)=>{
  return http.put(baseUrl , JSON.stringify(user))
}

export const updateUser = (personId, person) => {
  return http.put(`${baseUrl}/${personId}`, person);
};

export const deleteUser = (personId) => {
  return http.delete(`${baseUrl}/${personId}`);
};

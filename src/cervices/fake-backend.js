import { store } from "../redux/store";
const usersState = store.getState().Values;
export default function fakeBackend() {
  let users = [...usersState];
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/users/authenticate") && opts.method === "post":
            return authenticate();
          case url.endsWith("/users") && opts.method === "get":
            return getUsers();
          case url.endsWith("/users") && opts.method === "put":
            return addUser();
          case url.endsWith("/users/id") && opts.method === "delete":
            return deleteUser();
            case url.endsWith("/users/id") && opts.method === "put":
                return editUsers()
          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))

              .catch((error) => reject(error));
        }
      }

      function authenticate() {
        const { email, password } = body();
        const user = users.find(
          (x) => x.email === email && x.password === password
        );

        if (!user) return error("یوزر نیم یا پسورد صحیح نمیباشد");

        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "fake-jwt-token",
        });
      }

      function getUsers() {
        if (!isAuthenticated()) return unauthorized();
        return ok(users);
      }

      function addUser() {
        const { ...person } = body();
        const user = users.find((x) => {
          return x.email === person.email || x.phNumber === person.phNumber;
        });
        if (user)
          return error(
            "کاربری با این شماره یا ایمبل از قبل ثبت نام انجام داده"
          );
        users.push({ ...person });
        return ok(users);
      }
      function deleteUser() {
        const { id } = body();
        const updateUsers = users.filter((x) => {
          return x.id !== id;
        });
        return ok(updateUsers);
      }

      function editUsers(){
        const {id , person}=body();
        const Users=[...users]
        const usernIndex=users.findIndex((x)=>x.id===id)
        let user =Users[usernIndex];
        user=person;
        Users[usernIndex]=user;
        return ok(Users)
      }
      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isAuthenticated() {
        return opts.headers["Authorization"] === "Bearer fake-jwt-token";
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }
    });
  };
}

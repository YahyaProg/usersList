import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TbEdit } from "react-icons/tb";
import { getEditPerson } from "../../redux/actions/geteditPerson";
import { PopConfirm } from "../index";
const Table = ({ loginInfo, persons }) => {
  const dispatch = useDispatch();
  return (
    <div className="table-responsive-lg">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">نام</th>
            <th scope="col">نام خانوادگی</th>
            <th className="resp" scope="col">
              سن
            </th>
            <th scope="col">شهر</th>
            <th className="res" scope="col">
              جنسیت
            </th>
            <th scope="col">ایمیل</th>
            <th scope="col">شماره همراه</th>
            {loginInfo.role !== "user" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {persons.length > 0 &&
            persons.map((person) => {
              const {
                id,
                firstName,
                lastName,
                email,
                age,
                city,
                gender,
                phNumber,
              } = person;
              return (
                <tr key={id}>
                  <td className="firstName">{firstName}</td>
                  <td className="lasttName">{lastName}</td>
                  <td className="age resp">{age}</td>
                  <td className="city">{city}</td>
                  <td className="gender res">{gender}</td>
                  <td className="email">{email}</td>
                  <td className="phnumber">{phNumber}</td>
                  {loginInfo.role !== "user" && (
                    <td className="action-row">
                      <PopConfirm
                        id={id}
                        messsage="مطمئن هستید؟"
                        style="delete"
                      />
                      <Link
                        className="edit-svg"
                        onClick={() => dispatch(getEditPerson(id))}
                        to={`/edit/${id}`}
                      >
                        <TbEdit className="edit" />
                      </Link>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

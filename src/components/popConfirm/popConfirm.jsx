import React from "react";
import { Popconfirm, message } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { DeletePerson } from "../../redux/actions/getValues";
export default function PopConfirm({ id, messsage, style }) {
  const dispatch = useDispatch();
  const text = messsage;
  const confirm = (id) => {
    dispatch(DeletePerson(id));
    message.error("ایتم مورد نظر حذف شد");
  };
  return (
    <Popconfirm
      className="popConfirm"
      title={text}
      okText="بله"
      cancelText="خیر"
      onConfirm={() => confirm(id)}
    >
      <RiDeleteBin6Line className={style} />
    </Popconfirm>
  );
}

import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./home.css";
import { Navbar, Paginate, Paginaton, Table } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { SearchValues } from "../../redux/actions/getValues";

const Home = () => {
  const state = useSelector((state) => state.FilterValues);
  const localState = useSelector((state) => state.Values);
  const loginInfo = useSelector((state) => state.LofinInfo);
  console.log(loginInfo);
  const [perpage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [target, setTarget] = useState();

  const dispatch = useDispatch();
  const persons =
    target || localState.length < 10
      ? state
      : Paginate(state, currentPage, perpage);

  const handelPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(localState));
    dispatch(SearchValues(""));
  }, [localState, dispatch]);

  useEffect(() => {
    localStorage.setItem("login_info", JSON.stringify(loginInfo));
  }, [loginInfo]);

  useEffect(() => {
    dispatch(SearchValues(target));
  }, [target, dispatch]);

  return (
    <section className="Home-Page">
      <Navbar />
      <div className="search-input">
        <p className="search-title">جست و جو :</p>
        <div className="search-input-container">
          <HiOutlineSearch />
          <input
            onChange={(e) => setTarget(e.target.value)}
            placeholder="جست و جو بر اساس نام فامیل"
            type="text"
          />
        </div>
      </div>
      <Table loginInfo={loginInfo} persons={persons} />
      <Paginaton
        totalPersons={state?.length}
        currentPage={currentPage}
        perpage={perpage}
        handelPageChange={handelPageChange}
      />
    </section>
  );
};

export default Home;

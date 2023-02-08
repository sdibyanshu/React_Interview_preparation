import React, { useContext, useState } from "react";
import Usercard from "./Usercard";
import { AppContext, actions } from "./AppContext";

function SimpleApp() {
  const { state, dispatch } = useContext(AppContext);
  const [users, setusers] = useState([]);

  const getData = async () => {
    try {
      dispatch({ type: actions.LOADING });
      let res = await fetch(`https://api.github.com/users`);
      res = await res.json();
      console.log(res);
      setusers(res.data.items);
      setTimeout(() => {
        dispatch({ type: actions.SUCESS });
      }, 1000);
    } catch (error) {
      dispatch({ type: actions.ERROR });
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (state.status === actions.LOADING) {
    return <h1>{state.status}</h1>;
  } else if (state.status === actions.ERROR) {
    return <h1>{state.status}</h1>;
  }

  return (
    <>
      <h1>This is Basic Github app with UseCOntext also</h1>

      {users.map((el) => {
        <Usercard
          key={el.id}
          name={el.items.login}
          url={el.items.avatar_url}
        />;
      })}
    </>
  );
}
export default SimpleApp;

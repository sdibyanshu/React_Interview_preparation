import React, { useMemo, useState } from "react";

function Usememo() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);

  const multiCountMemo = useMemo(
    function multicount() {
      console.log("multicount");
      return count * 5;
    },
    [count]
  );

  return (
    <div>
      <h1>Usememo:It enhance the performance of out application</h1>
      <h3>Q1: Why we useUsememo hook</h3>
      <p>
        Usememo is used when We are working with some state and props and some
        unwanted Components Keep updating Let say i have updated a state but
        some unneccesary function get called which eventually reduces the
        performance of the application
      </p>

      <h1>Count:{count}</h1>
      <h1>Item:{item}</h1>
      <h1>{multiCountMemo}</h1>
      <button onClick={() => setcount(count + 1)}>Toggle me</button>
      <button onClick={() => setitem(item * 5)}>Update me</button>
    </div>
  );
}

export default Usememo;

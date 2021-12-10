import React, { Fragment, useState } from "react";

const AddNewCustomer = () => {
  const [surname, setSurname] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { surname };
      const response = await fetch("http://localhost:5000/customer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Add Customer</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={surname}
          onChange={e => setSurname(e.target.value)}
        />

        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default AddNewCustomer;
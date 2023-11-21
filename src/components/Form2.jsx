import { useState } from "react";
export const Form2 = () => {
  const [form, setForm] = useState({
    email:"",
    password:""
  });
  const handleChage = ({target}) =>{
    setForm({
      ...form,
      [target.name]:target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        className="form-control"
        style={{ width: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className="form-control"
              value={form.password}
              onChange={handleChage}
            />
          </div>
        </div>
        <button className="btn btn-primary btn-sm" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

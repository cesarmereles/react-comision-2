import { useState } from "react";
export const Form2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                const valorDelInput = e.target.value;
                setPassword(valorDelInput);
              }}
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

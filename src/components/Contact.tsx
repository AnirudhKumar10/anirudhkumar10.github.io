import { ChangeEventHandler, useState } from "react";

const intialState = { name: "", mobile: "", email: "" };

export const Contact: React.FC = () => {
  const [state, setState] = useState(intialState);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div>
        <label htmlFor="name"></label>
        <input
          name="name"
          placeholder="Enter your name"
          value={state.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="mobile"></label>
        <input
          name="mobile"
          placeholder="Enter your mobile"
          value={state.mobile}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          name="email"
          placeholder="Enter your email"
          value={state.email}
          onChange={changeHandler}
        />
      </div>
      <button>Submit</button>
    </div>
  );
};

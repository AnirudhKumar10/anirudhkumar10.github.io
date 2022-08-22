import { useForm } from "@formspree/react";

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xnqrnqep");

  return (
    <div className="contact">
      <form onSubmit={handleSubmit} method={"POST"}>
        <div>
          <label htmlFor="name"></label>
          <input id="name" name="name" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input id="phone" name="phone" placeholder="Enter your phone" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input id="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <textarea
            rows={3}
            id="message"
            name="message"
            placeholder="Please mention your purpose"
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      {/* TODO: To BE REMOVED LATER */}
      {/* <div>
        {state.succeeded ? (
          <div className="alert success fadeout">
            Form Submitted, We'll get in touch with you soon !
          </div>
        ) : (
          <div className="alert error fadeout">Submission Failed !</div>
        )}
      </div> */}
    </div>
  );
};

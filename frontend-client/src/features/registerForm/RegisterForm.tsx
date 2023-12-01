import "./RegisterForm.scss";
import { useForm } from "react-hook-form";
import { onSubmit } from "./helpers/submitForm";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="register">
      <h2>Registartion:</h2>
      <div className="register-container">
        <form
          className="register-containe__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            Email:
            <br />
            <input {...register("email", { required: true })} />
          </label>
          <label>
            Password:
            <br />
            <input {...register("password", { required: true })} />
          </label>
          <label>
            Confirm Password:
            <br />
            <input {...register("confirmPassword", { required: true })} />
          </label>
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
};

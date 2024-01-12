import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import "./registerForm.scss";
import { useForm } from "react-hook-form";
import { sendRegisterData } from "./reducer/registerSlice";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Path } from "../../app/config/path";

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const stateMessage = useAppSelector((state) => {
    return state.register.error;
  });
  const onSubmit = (data: any) => {
    return dispatch(sendRegisterData(data));
  };

  useEffect(() => {
    alert(stateMessage);
  }, [onSubmit]);

  if (stateMessage === "Ok") {
    return <Navigate to={Path.login} />;
  }
  return (
    <div className="register">
      <h2>Registartion:</h2>
      <div className="register-container">
        <form
          className="register-container__form"
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
          <label>
            Your name:
            <br />
            <input {...register("userName", { required: true })} />
          </label>
          <label>
            Your surname:
            <br />
            <input {...register("userSurname", { required: true })} />
          </label>
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  );
};

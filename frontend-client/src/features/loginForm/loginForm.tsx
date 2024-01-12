import { Link, Navigate } from "react-router-dom";
import "./loginForm.scss";
import { Path } from "../../app/config/path";
import { useForm } from "react-hook-form";
import { sendLoginData } from "./reducer/loginSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import { TloginType } from "./api/api-constants";

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useAppDispatch();
  const stateMessage = useAppSelector((state) => {
    return state.login.error;
  });
  const isLogined = useAppSelector((state) => state.login.isLogined);
  const onSubmit = (data: any) => {
    //!!!!ANY?
    return dispatch(sendLoginData(data));
  };

  useEffect(() => {
    alert(stateMessage);
  }, [stateMessage]);

  if (isLogined) {
    return <Navigate to={Path.home} />;
  }

  return (
    <div className="login">
      <h2>Login:</h2>
      <div className="login-container">
        <form
          className="login-container__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: "Укажите почту" })}
            />
          </label>
          <div className="form-error">
            {errors.email ? "Заполните поле" : null}
          </div>
          <label>
            <input
              type="text"
              placeholder="password"
              {...register("password", { required: "Укажите пароль" })}
            />
          </label>
          <div className="form-error">
            {errors.password ? "Заполните поле" : null}
          </div>
          <button type="submit">Go</button>
        </form>

        <div className="login-container__link">
          <p>Войдите или</p>
          <Link to={Path.register}>зарегистрируйтесь</Link>
        </div>
      </div>
    </div>
  );
};

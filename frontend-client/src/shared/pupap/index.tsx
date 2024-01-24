import "./pupap.scss";
import { ReactPortal, useEffect } from "react";
import { setActiveModalError } from "../../features/loginForm/reducer/loginSlice";
import { useAppDispatch } from "../hooks/hooks";

type ReactNode = ReactPortal | boolean | null | undefined;

type Props = {
  activeModal?: boolean | undefined;
  children: ReactNode | string;
};
export const Pupap = ({ activeModal, children }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setActiveModalError(false));
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [activeModal]);
  return (
    <div
      className={activeModal ? "error-modal active__modal" : "error-modal"}
      onClick={() => dispatch(setActiveModalError(false))}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
      <span
        className="material-symbols-outlined"
        onClick={() => dispatch(setActiveModalError(false))}
      >
        close
      </span>
    </div>
  );
};

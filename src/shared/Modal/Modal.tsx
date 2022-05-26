import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { modalSlice } from "../../store/slices/ModalSlice";
import { RootState } from "../../store/store";
import s from "./Modal.module.scss";

export const Modal = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const modal = useAppSelector((state: RootState) => state.modalReducer).active;

  const handleModal = () => {
    dispatch(modalSlice.actions.showModal(false));
    localStorage.setItem("modal-active", "false");
  };

  return (
    <section
      className={s.modal + " " + (modal === true ? s.modal_active : "")}
      onClick={handleModal}
    >
      <div
        className={s.content + " " + (modal === true ? s.content_active : "")}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </section>
  );
};

import { SyntheticEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { modalSlice } from "../../../../store/slices/ModalSlice";
import { RootState } from "../../../../store/store";
import { fetchForm } from "../../../../store/thunks/fetchForm";
import s from "./SendForm.module.scss";

export const SendForm = (postId: { postId: string }) => {
  const [formValue, setFormValue] = useState({ name: "", email: "", body: "" });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: SyntheticEvent) => {
    dispatch(
      fetchForm({
        postId: postId.postId,
        ...formValue,
      })
    );

    // dispatch

    dispatch(modalSlice.actions.showModal(false));
    localStorage.setItem("modal-active", "false");

    e.preventDefault();
  };
  const handleInputName = (e: SyntheticEvent) => {
    const inputName = e.target as HTMLInputElement;
    setFormValue({ ...formValue, name: inputName.value });
  };
  const handleInputEmail = (e: SyntheticEvent) => {
    const inputEmail = e.target as HTMLInputElement;
    setFormValue({ ...formValue, email: inputEmail.value });
  };
  const handleText = (e: SyntheticEvent) => {
    const textarea = e.target as HTMLTextAreaElement;
    setFormValue({ ...formValue, body: textarea.value });
  };

  return (
    <form className={s.comment_form} onSubmit={handleSubmit}>
      <div className={s.input_wrapper}>
        <input
          type="text"
          placeholder="Имя"
          required
          pattern="^[A-Za-zА-Яа-яЁё\s]+$"
          onChange={handleInputName}
        />
        <input
          type="email"
          placeholder="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={handleInputEmail}
        />
      </div>
      <textarea
        tabIndex={1}
        placeholder="Комментарий..."
        cols={10}
        rows={1}
        required
        minLength={1}
        maxLength={500}
        onChange={handleText}
      ></textarea>
      <input type="submit" value="Отправить" />
    </form>
  );
};

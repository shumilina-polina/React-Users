import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Modal } from "../../shared/Modal/Modal";
import UserBlock from "../../shared/UserBlock/UserBlock";
import { modalSlice } from "../../store/slices/ModalSlice";
import { RootState } from "../../store/store";
import { User } from "../../types/types";
import { CommentsSlider } from "./components/CommentsSlider";
import { SendForm } from "./components/SendForm/SendForm";
import s from "./PostPage.module.scss";

export const PostPage = ({
  id,
  name,
  address,
  email,
  phone,
  website,
  company,
}: User) => {
  const post = useAppSelector(
    (state: RootState) => state.postClickReducer
  ).currentPost;

  const dispatch = useAppDispatch();

  const handleSendButton = () => {
    dispatch(modalSlice.actions.showModal(true));
    localStorage.setItem("modal-active", "true");
  };

  return (
    <>
      <UserBlock
        id={id}
        name={name}
        address={address}
        email={email}
        phone={phone}
        website={website}
        company={company}
      />
      <section className={s.section_post}>
        <div className="container">
          <h2 className={s.section_title}>Пост</h2>
          <article className={s.post}>
            <div className={s.head}>
              <h3 className={s.title}>{post.title}</h3>
              <span className={s.date}>12.01.22</span>
            </div>
            <p className={s.content}>{post.body}</p>
          </article>
          <div className={s.title_wrapper}>
            <h2 className={s.section_title}>Комментарии</h2>
            <button className={s.send} onClick={handleSendButton}>
              Оставить комментарий
            </button>
          </div>
          <CommentsSlider post={post} />
        </div>
      </section>
      <Modal>
        <SendForm postId={post.id} />
      </Modal>
    </>
  );
};

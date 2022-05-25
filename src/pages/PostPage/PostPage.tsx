import { useAppSelector } from "../../hooks/redux";
import UserBlock from "../../shared/UserBlock/UserBlock";
import { RootState } from "../../store/store";
import { User } from "../../types/types";
import { CommentsSlider } from "./components/CommentsSlider";
import s from "./PostPage.module.scss";

export const PostPage = ({ id, name, address, email, phone }: User) => {
  const post = useAppSelector(
    (state: RootState) => state.postClickReducer
  ).currentPost;

  return (
    <section className={s.section_post}>
      <UserBlock
        id={id}
        name={name}
        address={address}
        email={email}
        phone={phone}
      />
      <div className="container">
        <h2 className={s.section_title}>Post</h2>
        <article className={s.post}>
          <div className={s.head}>
            <h3 className={s.title}>{post.title}</h3>
            <span className={s.date}>12.01.22</span>
          </div>
          <p className={s.content}>{post.body}</p>
        </article>
        <h2 className={s.section_title}>Comments</h2>
        <CommentsSlider post={post} />
      </div>
    </section>
  );
};

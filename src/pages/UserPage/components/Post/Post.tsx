import { Link } from "react-router-dom";
import { PostType } from "../../../../types/types";
import s from "./Post.module.scss";

export const Post = (post: { post: PostType }) => {
  return (
    <Link className={s.link} to="/post">
      <article className={s.post}>
        <div className={s.head}>
          <h3 className={s.title}>{post.post.title}</h3>
          <span className={s.date}>12.01.22</span>
        </div>
        <p className={s.content}>{post.post.body}</p>
      </article>
    </Link>
  );
};

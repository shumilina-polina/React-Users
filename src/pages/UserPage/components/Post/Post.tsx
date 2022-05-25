import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { postClickSlice } from "../../../../store/slices/PostClickSlice";
import { PostType } from "../../../../types/types";
import s from "./Post.module.scss";

export const Post = (post: { post: PostType }) => {
  const dispatch = useAppDispatch();

  const handlePost = () => {
    dispatch(postClickSlice.actions.clickCurrentPost(post.post));
    localStorage.setItem("postClick", JSON.stringify(post.post));
  };
  
  return (
    <Link className={s.link} to="/post">
      <article className={s.post} onClick={handlePost}>
        <div className={s.head}>
          <h3 className={s.title}>{post.post.title}</h3>
          <span className={s.date}>12.01.22</span>
        </div>
        <p className={s.content}>{post.post.body}</p>
      </article>
    </Link>
  );
};

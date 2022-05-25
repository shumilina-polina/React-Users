import { CommentType } from "../../../types/types";
import s from "./Comment.module.scss";

type Props = {
  comment: CommentType;
};

export const Comment = (comment: Props) => {
  return (
    <article className={s.comment}>
      <span className={s.email}>{comment.comment.email}</span>
      <h4 className={s.name}>{comment.comment.name}</h4>
      <p className={s.content}>{comment.comment.body}</p>
    </article>
  );
};

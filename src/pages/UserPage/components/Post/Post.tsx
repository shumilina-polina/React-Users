import s from "./Post.module.scss";

type Props = {
  title: string;
  date: string;
  content: string;
};

export const Post = ({ title, date, content }: Props) => {
  return (
    <article className={s.post}>
      <div className={s.head}>
        <h3 className={s.title}>{title}</h3>
        <span className={s.date}>{date}</span>
      </div>
      <p className={s.content}>{content}</p>
    </article>
  );
};

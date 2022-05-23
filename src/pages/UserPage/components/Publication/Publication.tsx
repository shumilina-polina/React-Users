import s from "./Publication.module.scss";

type Props = {
  title: string;
};

export const Publication = ({ title }: Props) => {
  return <article className={s.public}>{title}</article>;
};

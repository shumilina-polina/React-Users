import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import UserBlock from "../../shared/UserBlock/UserBlock";
import { RootState } from "../../store/store";
import { fetchPosts } from "../../store/thunks/fetchPosts";
import { PublicationType, User } from "../../types/types";
import { PostsSlider } from "./components/PostsSlider";
import { Publication } from "./components/Publication/Publication";
import s from "./UserPage.module.scss";

export const UserPage = ({ id, name, address, email, phone, website,company }: User) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [id]);

  const posts = useAppSelector((state: RootState) => state.postsReducer);

  const publications: PublicationType[] = [
    {
      id: "1",
      title: "Twenty One Pilots",
    },
    {
      id: "2",
      title: "Twenty One Pilots",
    },
    {
      id: "3",
      title: "Twenty One Pilots",
    },
    {
      id: "4",
      title: "Twenty One Pilots",
    },
    {
      id: "5",
      title: "Twenty One Pilots",
    },
    {
      id: "6",
      title: "Twenty One Pilots",
    },
  ];

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
      <section className={s.posts}>
        <div className={s.wrapper}>
          <div className="container">
            <h2 className={s.posts_title}>Посты</h2>
            <div className={s.posts_wrapper}>
              <PostsSlider posts={posts.posts} />
            </div>
          </div>
        </div>
      </section>
      <section className={s.public}>
        <div className={s.wrapper}>
          <div className="container">
            <h2 className={s.public_title}>Публикации</h2>
            <div className={s.public_wrapper}>
              {publications.map((publication) => (
                <Publication key={publication.id} title={publication.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

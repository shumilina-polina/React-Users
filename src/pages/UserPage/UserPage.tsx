import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import { fetchPosts } from "../../store/thunks/fetchPosts";
import { PostType, User } from "../../types/types";
import { Post } from "./components/Post/Post";
import { PostsSlider } from "./components/PostsSlider";
import s from "./UserPage.module.scss";

//записать currentUser в localStorage

export const UserPage = ({ id, name, address, email, phone }: User) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [id]);

  const posts = useAppSelector((state: RootState) => state.postsReducer);

  // const publications: PublicationType[] = [
  //   {
  //     id: 1,
  //     title: "Twenty One Pilots",
  //   },
  //   {
  //     id: 2,
  //     title: "Twenty One Pilots",
  //   },
  //   {
  //     id: 3,
  //     title: "Twenty One Pilots",
  //   },
  //   {
  //     id: 4,
  //     title: "Twenty One Pilots",
  //   },
  //   {
  //     id: 5,
  //     title: "Twenty One Pilots",
  //   },
  //   {
  //     id: 6,
  //     title: "Twenty One Pilots",
  //   },
  // ];

  return (
    <>
      <section className={s.user}>
        <div className={s.wrapper}>
          <div className="container">
            <h2 className={s.user_title}>{name}</h2>
            <div className={s.info}>
              <span>{address.city}</span>
              <span>{email}</span>
              <span>{phone}</span>
              <button>Написать сообщение</button>
              <button>Предложить сходить на концерт</button>
            </div>
          </div>
        </div>
      </section>
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
              {/* {publications.map((publication) => (
                <Publication key={publication.id} title={publication.title} />
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

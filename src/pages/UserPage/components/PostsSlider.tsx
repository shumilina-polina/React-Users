import { FC } from "react";
import Slider from "react-slick";
import { PostType } from "../../../types/types";
import s from "../../UserPage/UserPage.module.scss";
import { Post } from "./Post/Post";

type Props = { posts: PostType[] };

export const PostsSlider: FC<Props> = (posts) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Slider className={s.posts_slider} {...settings}>
        {posts.posts.map((post: PostType) => {
          return <Post key={post.id} post={post} />;
        })}
      </Slider>
    </>
  );
};

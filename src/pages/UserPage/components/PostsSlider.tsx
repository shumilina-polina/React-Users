import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { PostType } from "../../../types/types";
import s from "../../UserPage/UserPage.module.scss";
import { Post } from "./Post/Post";

type Props = { posts: PostType[] };

export const PostsSlider: FC<Props> = (posts) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    speed: 700,
    slidesToShow: isTabletOrMobile ? 2 : 3,
    slidesToScroll: isTabletOrMobile ? 2 : 3,
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

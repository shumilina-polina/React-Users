import { FC, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { RootState } from "../../../store/store";
import { fetchComments } from "../../../store/thunks/fetchComments";
import { CommentType, PostType } from "../../../types/types";
import s from "../../PostPage/PostPage.module.scss";
import { Comment } from "./Comment";

type Props = {
  post: PostType;
};

export const CommentsSlider = (post: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchComments(post.post.id));
  }, [post]);

  const comments = useAppSelector((state: RootState) => state.commentsReducer);

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 420px)" });

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    speed: 700,
    slidesToShow: isTablet ? (isMobile ? 1 : 2) : 3,
    slidesToScroll: isTablet ? (isMobile ? 1 : 2) : 3,
  };
  return (
    <Slider className={s.comments_slider} {...settings}>
      {comments.comments.map((comment: CommentType) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </Slider>
  );
};

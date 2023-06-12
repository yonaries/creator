import PostCommentForm from "./post-comment-form";
import PostCommentItem from "./post-comment-item";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type Props = {
  showComments: boolean;
  comments: {
    id: string;
    avatar: string;
    name: string;
    comment: string;
  }[];
};

const PostCommentSection = ({ showComments = false, comments }: Props) => {
  const showMoreCommentsHandler = () => {
    // TODO: handle show more comments here
  };
  return (
    <div className="mt-2 w-full">
      <PostCommentForm />
      {showComments && (
        <div className="mt-4">
          {comments.map((comment) => (
            <PostCommentItem
              avatar={comment.avatar}
              name={comment.name}
              comment={comment.comment}
              key={comment.id}
            />
          ))}

          <Button
            variant="link"
            className=" p-0 font-bold capitalize text-blue-500"
            onClick={showMoreCommentsHandler}
          >
            show more comments
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostCommentSection;

import PostCommentForm from "./post-comment-form";
import PostCommentItem from "./post-comment-item";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

type Props = { showComments: boolean };

const PostCommentSection = ({ showComments = false }: Props) => {
  const showMoreCommentsHandler = () => {
    // TODO: handle show more comments here
  };
  return (
    <div className="mt-2 w-full">
      <PostCommentForm />
      {showComments && (
        <div className="mt-4">
          {[1, 2, 3, 4, 5].map((comment) => (
            <PostCommentItem
              avatar="https://github.com/shadcn.png"
              name="Shad Mirza"
              comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              key={comment}
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

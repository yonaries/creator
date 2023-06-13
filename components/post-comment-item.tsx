import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Props = {
  avatar: string;
  name: string;
  comment: string;
};

const PostCommentItem = ({ avatar, name, comment }: Props) => {
  return (
    <div className="my-3 flex items-start">
      <Avatar className="mr-3">
        <AvatarImage src={avatar} alt="@shadcn" />
        <AvatarFallback>
          {name.split(" ").reduce((prev, cur) => prev[0] + cur[0])}
        </AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-sm font-bold dark:text-slate-300">{name}</h3>
        <p className="text-xs dark:text-slate-400">{comment}</p>
      </div>
    </div>
  );
};

export default PostCommentItem;

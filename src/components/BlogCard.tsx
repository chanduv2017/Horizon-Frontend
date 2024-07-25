import { Link} from "react-router-dom";
import { Avatar } from "./Avatar";


interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
          <Avatar name={authorName} />
          <div className="font-light pl-2 text-xm flex justify-center flex-col  ">
            {authorName}.
          </div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>

          <div className="pl-2  text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate.slice(0, 10)}
          </div>
        </div>
        <div className="font-semibold text-xl pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          {Math.ceil(content.length / 100)} min read
        </div>
      </div>
    </Link>
  );
};


function Circle() {
  return <div className="h-0.5 w-0.5 rounded-full bg-slate-500"></div>;
}


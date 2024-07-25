import Header from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import { Loading } from "../components/Loading";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <div className=" ">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import Header from "../components/Header";
import { BlogCard } from "../components/BlogCard";
import { Loading } from "../components/Loading";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs)
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <div className=" ">
          {blogs.map( blog => (
            <BlogCard
              key={blog.post_id}
              post_id={blog.post_id}
              User={blog.User?.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              CreatedAt={blog.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6 space-y-8  ">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Thoughts, Ideas, Stories
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                A place to read, write, and deepen your understanding
              </p>
              <div>
                <Link
                  to="/signin"
                  className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16">
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <Link to="" className="hover:underline">
                      The Future of Web Development
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">
                    Explore the latest trends and technologies shaping the
                    future of web development.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <Link to="" className="hover:underline">
                      Mastering React Hooks
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">
                    Dive deep into the power of React Hooks and learn how to
                    build more efficient and maintainable applications.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <Link to="" className="hover:underline">
                      Optimizing Website Performance
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">
                    Learn proven techniques to improve the speed and
                    responsiveness of your website.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
                <img
                  src="/placeholder.svg"
                  width={300}
                  height={200}
                  alt="Blog Post"
                  className="aspect-[3/2] w-full object-cover transition-all group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <Link to="" className="hover:underline">
                      Designing Accessible Interfaces
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">
                    Explore best practices and techniques for creating inclusive
                    and accessible user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



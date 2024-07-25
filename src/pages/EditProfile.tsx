import { useNavigate } from "react-router-dom";

export const ProfileSection = () => {
  const Navigate=useNavigate();
  return (
    <div className="w-full max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <div className="flex justify-center flex-col md:flex-row items-center gap-6 mb-8 md:mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-14"
        >
          <path
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <div className="grid gap-2">
          <h1 className="text-2xl flex justify-center md:text-3xl font-bold ">
            Edit Profile
          </h1>
          <p className="text-muted-foreground flex justify-center">
            Update your profile information.
          </p>
        </div>
      </div>
      <form className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 mb-2"
              placeholder="John Doe"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="username">Username</label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 mb-2"
              placeholder="johndoe"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 mb-2"
            type="email"
            placeholder="john@example.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            placeholder="Software Engineer at Acme Inc. Passionate about building user-friendly applications."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 mb-2"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={()=>Navigate("/blogs")} className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-600 rounded-lg  hover:bg-slate-800">
            Cancel
          </button>
          <button  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-600 rounded-lg  hover:bg-slate-800">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

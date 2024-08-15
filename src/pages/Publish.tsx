import Header from "../components/Header";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const navigate=useNavigate()
  return (
    <div>
      <Header/>
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full ">
          <input
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 mb-2"
            placeholder="Title"
          ></input>
          <TextEditor onChange={(e)=>{
              setContent(e.target.value)
          }}/>
          <button
            onClick={async () => {
              const response=await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,content
              },{
                headers:{
                  Authorization:"Bearer "+localStorage.getItem("token"),
                }
              });
              console.log(response)
              navigate(`/blog/${response.data.id}`)
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-600 rounded-lg  hover:bg-slate-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

export function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement> )=>void}) {
  return (
    <div>
      <div className="w-full mb-4 border border-gray-300 rounded-lg bg-gray-100 mt-4">
        <div className="  bg-white rounded-b-lg ">
          <textarea onChange={onChange}
            id="editor"
            rows={8}
            className="block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2 pt-1 focus:outline-none"
            placeholder="Write an article..."
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}

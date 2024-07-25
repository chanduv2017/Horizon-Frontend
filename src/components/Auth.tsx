import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "../zod.ts";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
    username:"",
  });
  
  const Navigate=useNavigate();
  const sendRequest = async () => {
    try{
    const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,postInputs);
    const jwt=response.data.jwt;
    const username=response.data.username;
    localStorage.setItem("token",jwt);
    localStorage.setItem("username",username)
    Navigate("/blogs");
    }catch(e){
      //alert the user that the request has failed
    }
  };
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center ">
        <div>
          <div className="px-10 ">
            <div className="text-3xl font-extrabold text-center">{type == "signin" ? "Login to your account" : "Create an account"}</div>
            <div className="max-w-md text-center text-sm font-light text-slate-500 mt-2">
              
              {type == "signin" ? "Don't have an account?" : "Already have an account?"}
              <Link className="pl-2 underline" to={type == "signin" ? "/signup" : "/signin"}>
                {type == "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
          </div>

          <div className="pt-8">
          {type=="signup"?<LabelleddInput
              label="name"
              placeholder="Enter your name"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />:null
          }
          {type=="signup"?<LabelleddInput
              label="username"
              placeholder="Enter username"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />:null
          }
            <LabelleddInput
              label="email"
              placeholder="m@example.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />

            <LabelleddInput
              label="password"
              type="password"
              placeholder="123456"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            
            <button
              onClick={sendRequest}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              {type == "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelleddInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelleddInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelleddInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-2">
        {label}
      </label>
      <input
        onChange={onChange}
        
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
}

import React from "react";
import "./Form2.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = () => {
  const form = useForm();
  const { register, handleSubmit, formState, control , getValues } = form;
  const {errors} = formState

  const onSubmit = (data) => {
    console.log(data);
  };

  const isWhitespace=(value)=>{
const name=getValues(value)
return name.trim().length > 0
}

  return (
    <>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: {
                value: true,
                message: "username is required",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              maxLength: {
                value: 20,
                message: "Password must not exceed 20 characters",
              },
              validate:() => isWhitespace("name") || "No white space"
            })}
          />
<p>{errors.name?.message}</p>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email",{
                required:{
                    value:true,
                    message:"email is required"
                }
            })}
          />
          <p>{errors.email?.message}</p>

          <input
            type="text"
            placeholder="Set your password"
            {...register("password",{
                required:{
                    value:true,
                    message:"Password is required"
                },
                validate:()=> isWhitespace("password")  || "No white space",
                minLength:{value:5,message:"minimum 5 character"},
                maxLength:{value:10,message:"maximum 10 character"}
            })}
          />
          <p>{errors.password?.message}</p>

          <button type="submit">Submit</button>
        </form>
        <DevTool control={control} />
      </main>
    </>
  );
};

export default Form2;

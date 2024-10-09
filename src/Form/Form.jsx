import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Form component
const Form = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: 0,
      date: new Date(),
      social: {
        twitter: "",
        facebook: "",
      },
      number: ["", ""],
      phNumbers: [{ number: "" }],
    },
    mode:"onTouched",
  });

  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    reset,
    getValues,
    setValue,
    trigger
  } = form;

  const {
    errors,
    isDirty,
    touchedFields,
    dirtyFields,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.log(error);
  };
  const handleGetValues = () => {
    console.log(getValues("name"));
  };

  const handleSetValue = () => {
    setValue("name", "david bhai", {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p className="red">{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        <p className="red">{errors.email?.message}</p>

        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          id="twitter"
          {...register("social.twitter", {
            required: {
              value: true,
              message: "Twitter is required",
            },
          })}
        />
        <p className="red">{errors.social?.twitter?.message}</p>

        <label htmlFor="facebook">Facebook</label>
        <input
          type="text"
          id="facebook"
          {...register("social.facebook", {
            required: {
              value: true,
              message: "Facebook is required",
            },
          })}
        />
        <p className="red">{errors.social?.facebook?.message}</p>

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "age is not valid",
            },
          })}
        />
        <input
          type="date"
          id="date"
          {...register("date", {
            valueAsDate: true,
            required: {
              value: true,
              message: "Date is not valid",
            },
          })}
        />
        <button type="submit">
          Submit
        </button>
        <button onClick={()=> reset()}>reset</button>
        <button onClick={()=> trigger()}>validate</button>
      </form>

      <DevTool control={control} />
    </>
  );
};

export default Form;

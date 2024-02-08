import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useState } from "react";
import { postData } from "./../services/post";

function Form({ setUpdate }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      userName: "TestUser",
      email: "test@gmail.com",
      channel: "Test",
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      postData({ ...data, likes: 0 });
      setUpdate((update) => update + 1);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  //kai darysim edit naudosim setValues
  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            {...register("userName", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.userName?.message}</div>
        </div>

        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ivalid email adress format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("bademail.com") ||
                    "This email is not valid"
                  );
                },
              },
            })}
          />
          <div className="error">{errors.email?.message}</div>
        </div>

        <div>
          <label htmlFor="channel">Favourite channel:</label>
          <input type="text" id="channel" {...register("channel")} />
        </div>

        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
      <DevTool control={control} />
    </>
  );
}

export default Form;

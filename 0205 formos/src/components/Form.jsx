import { DevTool } from "@hookform/devtools";
import { Message } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { postData } from "./../services/post.js";
import { useEffect, useState } from "react";
import { updateData } from "../services/update.js";

function Form({ setUpdate, user, setEdit }) {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      channel: "",
      // userName: "Enter name",
      // email: "Enter@email.com",
      // channel: "Enter channel",
    },
  });

  const formSubmitHandler = async (data) => {
    try {
      if (user) {
        await updateData(user.id, data);
        setEdit(false);
      } else {
        await postData({ ...data, likes: 0 });
      }

      setUpdate((update) => update + 1);
      reset();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setValue("userName", user.userName, { shouldValidate: true });
      setValue("email", user.email, { shouldValidate: true });
      setValue("channel", user.channel, { shouldValidate: true });
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(formSubmitHandler)} noValidate>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            id="userName"
            {...register("userName", {
              required: "User name is required",
            })}
          />
          <div className="errors" style={{ color: "red", padding: "5px" }}>
            {errors.userName?.message}
          </div>
        </div>
        <br />

        <div>
          <label htmlFor="email">User Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email format",
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
                    !fieldValue.endsWith("badEmailAddress.com") ||
                    "This email is blacklisted"
                  );
                },
              },
            })}
          />
          <div className="errors" style={{ color: "red", padding: "5px" }}>
            {errors.email?.message}
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="channel">Favourite channel:</label>
          <input type="text" id="channel" {...register("channel")} />
        </div>
        <br />
        {/* <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <br />
        <br />
        <label htmlFor="email">Enter name:</label>
        <textarea {...register("Enter something", { required: true })} />
        <br />
        <br />
        <label htmlFor="email">User Email again:</label>
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <br />
        <label htmlFor="email">Phone number:</label>
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: false,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <br />
        <br />

        <input
          type="color"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        /> 
        <br />
        <br />
        <div className="radio">
          <input
            {...register("Title", { required: true })}
            type="radio"
            value="Mr"
            label="Mr"
          />
          Mr
          <input
            {...register("Title", { required: true })}
            type="radio"
            value="Mrs"
          />
          Mrs
          <input
            {...register("Title", { required: true })}
            type="radio"
            value="Miss"
          />
          Miss
          <input
            {...register("Title", { required: true })}
            type="radio"
            value="Dr"
          />
          Dr
        </div>
        <br />
        <br /> */}

        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
      <DevTool control={control} />
    </>
  );
}

export default Form;

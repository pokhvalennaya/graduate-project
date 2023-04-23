import { useForm } from "react-hook-form";
import "./form.css";

const UserProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <input
          placeholder="Enter First Name"
          type="text"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <div className="error">Please enter your First Name</div>
        )}
      </div>
      <div className="form-input">
        <input
          placeholder="Enter Last Name"
          type="text"
          {...register("lastName", { required: true })}
        />
        {errors.lastName?.type === "required" && (
          <div className="error">Please enter your First Name</div>
        )}
      </div>
      <select
        className="select"
        placeholder="Country"
        {...register("country", { required: true })}
      >
        <option value="">Select country</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Poland">Poland</option>
        <option value="Germany">Germany</option>
      </select>
      {errors.country?.type === "required" && (
        <div className="error">Please select country</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;

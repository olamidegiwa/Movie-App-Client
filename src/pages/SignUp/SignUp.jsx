import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useForm } from "react-hook-form";
import AuthContext from "../../context/AuthContext";
import Spinner from "../../utils/Spinner";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);

  const { handleRegisterUser, authenticating } = useAuth();

  const btnText = authenticating ? <Spinner /> : "create an account";
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  
    handleRegisterUser(data);
  };

  return (
    <div className="text-start signup">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-3 custom-bg-light-grey p-4 p-sm-5 rounded-3"
        action=""
      >
        <h2>Sign Up</h2>
        <div className="position-relative">
          <input
            type="text"
            placeholder="Email Address"
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.email ? "error" : ""
            }`}
            {...register("email", { required: true })}
          />
          {errors.email && errors.email.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3">
              Can't be empty
            </span>
          ) : null}
        </div>

        <div className="position-relative">
          <input
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.password ? "error" : ""
            } `}
            type={passwordVisible ? "text" : "password"}
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-2">
              Can't be empty
            </span>
          ) : null}
          {/* <ShowEye eyeState={passwordVisible} updateEye={setPasswordVisible} /> */}
        </div>
        <div className="position-relative">
          <input
            type={passwordRepeatVisible ? "text" : "password"}
            className={`custom-bg-light-grey py-3 w-100 ps-2 ${
              errors.repeatPassword ? "error" : ""
            }`}
            placeholder="Repeat Password"
            {...register("repeatPassword", { required: true })}
          />
          {/* <ShowEye
            eyeState={passwordRepeatVisible}
            updateEye={setPasswordRepeatVisible}
          /> */}
          {errors.repeatPassword &&
          errors.repeatPassword.type === "required" ? (
            <span className="custom-text-red position-absolute end-0 pt-3 pe-2">
              Can't be empty
            </span>
          ) : null}
        </div>
        <button
          disabled={authenticating}
          className="custom-bg-red border-0 py-3 rounded-2 my-4"
        >
          {btnText}
        </button>
        <p className="text-center">
          Already have an account?
          <Link
            to="/signin"
            className="text-decoration-none custom-text-red ps-2"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

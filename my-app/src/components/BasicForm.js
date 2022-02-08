import {useFormik} from "formik";

export const BasicForm = () => {
  return (
    <div>
      <h1>Basic Form</h1>

      <input placeholder="Email" type="email"/>
      <input placeholder="Password" type="password" />
    </div>
  );
};

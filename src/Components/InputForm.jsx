/* eslint-disable react/prop-types */

import { useField } from "formik";
// eslint-disable-next-line react/prop-types
const InputForm = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 mb-5 ">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );
};

export default InputForm;

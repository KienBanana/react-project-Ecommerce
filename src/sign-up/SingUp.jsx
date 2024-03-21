import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "../Components/InputForm";
// import RadioFormik from "../radio/RadioFormik";
// import CheckBoxFormik from "../checkbox/CheckBoxFormik";
// import DropDownFormik from "../dropdown/DropDownFormik";

// const dropdownData = [
//   {
//     id: 1,
//     value: "Teacher",
//     text: "Teacher",
//   },
//   {
//     id: 2,
//     value: "Developer",
//     text: "Developer",
//   },
//   {
//     id: 3,
//     value: "Pilot",
//     text: "Pilot",
//   },
// ];

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        gender: "male",
        job: "",
        term: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("Please enter your username"),
        email: yup
          .string()
          .email("Invalid email address")
          .required("Please enter your email address"),
        password: yup
          .string()
          .required("Please enter your password")
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
          ),
        gender: yup
          .string()
          .required("Please select your gender")
          .oneOf(["male", "female"], "You can only select male or female"),
        job: yup
          .string()
          .required("Please select your job")
          .oneOf(["Teacher", "Developer", "Pilot"]),
        term: yup
          .boolean()
          .oneOf([true], "Please check the term and conditions"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          alert("Account successfully created <3");
          resetForm();
        }, 5000);
      }}
    >
      {(formik) => {
        /* Lấy được giá trị của gender */
        {
          /* const watchGender = formik.values.gender; */
        }
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-[400px] mx-auto my-10 border p-5 shadow-md rounded-lg"
          >
            <InputForm
              name="username"
              placeholder="Enter your username"
              id="username"
              label="Username"
              type="text"
            ></InputForm>
            <InputForm
              name="password"
              placeholder="Enter your password"
              id="password"
              label="Password"
              type="password"
            ></InputForm>
            <InputForm
              name="email"
              placeholder="Enter your email"
              id="email"
              label="Email"
              type="email"
            ></InputForm>
            {/* <div className="flex flex-col gap-3 mb-5">
              <label htmlFor="gender" className="cursor-pointer">
                Gender
              </label>
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-x-3">
                  <RadioFormik
                    name="gender"
                    value="male"
                    checked={watchGender === "male"}
                    label="Male"
                  ></RadioFormik>
                </div>
                <div className="flex items-center gap-x-3">
                  <RadioFormik
                    name="gender"
                    value="female"
                    checked={watchGender === "female"}
                    label="Female"
                  ></RadioFormik>
                </div>
              </div>
            </div> */}
            {/* <DropDownFormik
              labelText="Your job"
              name="job"
              data={dropdownData}
              setValue={formik.setFieldValue}
            ></DropDownFormik>
            <CheckBoxFormik name="term">
              I accept the term and conditions
            </CheckBoxFormik> */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold "
            >
              {formik.isSubmitting ? (
                <div className="w-5 h-5 rounded-full  border-[3px] border-white border-t-2 border-t-transparent animate-spin mx-auto"></div>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;

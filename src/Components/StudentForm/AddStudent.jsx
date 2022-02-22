import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import differenceInYears from "date-fns/differenceInYears";
import { useDispatch } from "react-redux";
import { addData, editValue } from "../../Redux/Slice";

const AddStudent = ({ close, editVal, editDataValue, editIndex }) => {
  const dispatch = useDispatch();



  const initialValues = {
    studentName: "",
    fatherName: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
    email: "",
    class: "",
    marks: "",
    date: "",
  };

  const validationSchema = Yup.object().shape({
    studentName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    fatherName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    dob: Yup.date()
      .test("dob", "Should be greater than 10", function (value) {
        return differenceInYears(new Date(), new Date(value)) >= 10;
      })
      .required("Required"),
    address: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    city: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    state: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    pincode: Yup.string()
      .matches(/^[1-9][0-9]{5}$/, "Invalid Pincode")
      .required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .max(10, "Must be exactly 10 digits"),
    email: Yup.string().email("Invalid email").required("Required"),
    class: Yup.number().required("Required"),
    marks: Yup.string()
      .required("Required")
      .matches(/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/, "Invalid Marks"),
    date: Yup.string(),
  });

  const dropDownOptions = [
    { key: "Select Class", value: "" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "10", value: "10" },
  ];

  const submitHandler = (values) => {
    if (editVal) {
      dispatch(editValue({ id: editIndex, value: values }));
    } else {
      dispatch(addData(values));
    }

    close(false);
  };

  return (
    <Formik
      initialValues={editVal ? editDataValue : initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="text"
              label="Student Name"
              name="studentName"
            />
            <FormikControl
              control="input"
              type="text"
              label="Father's Name"
              name="fatherName"
            />
            <FormikControl
              control="input"
              type="text"
              label="DOB(YYYY-MM-DD)"
              name="dob"
            />
            <FormikControl
              control="input"
              type="text"
              label="Address"
              name="address"
            />
            <FormikControl
              control="input"
              type="text"
              label="City"
              name="city"
            />
            <FormikControl
              control="input"
              type="text"
              label="State"
              name="state"
            />
            <FormikControl
              control="input"
              type="text"
              label="Pin Code"
              name="pincode"
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone Number"
              name="phoneNumber"
            />
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="select"
              label="Class"
              name="class"
              options={dropDownOptions}
            />
            <FormikControl
              control="input"
              type="text"
              label="Marks(%)"
              name="marks"
            />
            <FormikControl
              control="date"
              type="datetime-local"
              label="Date enrolled"
              name="date"
            />
            <button type="submit" disabled={!formik.isValid}>
              {editVal ? "Edit" : "Submit"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddStudent;

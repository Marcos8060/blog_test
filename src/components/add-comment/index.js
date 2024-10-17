import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const AddComment = () => {
  const initialValues = {
    quantity: "",
    reason: "",
  };

  const validationSchema = Yup.object().shape({
    quantity: Yup.string().required("Quantity is required!"),
    reason: Yup.string().required("Reason is required!"),
  });

  const handleAddComment = async (formValue, helpers) => {
    try {
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleAddComment}
      >
        <Form>
          <div className="flex items-center gap-4 justify-between">
            <div className="w-10/12">
              <Field
                className="block py-2 text-sm rounded px-2 focus:outline-none w-full"
                type="text"
                placeholder="Add a comment"
                name="quantity"
              />
            </div>
            <div className="w-2/12">
              <button className="text-link text-sm font-bold mx-auto">
                Post
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddComment;

import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addComment } from "@/redux/service"; // Assuming this is an API call function
import toast from "react-hot-toast";

const AddComment = ({ data }) => {

  const initialValues = {
    text: "",
  };

  const handleAddComment = async (formValue, helpers) => {
    try {
      const response = await addComment(data.id,formValue.text).then((res) => {
        if(response.status === 201){
          toast.success('Comment added successfully')
          helpers.resetForm();
        }
      });
    } catch (err) {
      toast.error(err)
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAddComment}
      >
        <Form>
          <div className="flex items-center gap-4 justify-between">
            <div className="w-10/12">
              <Field
               required
                className="block py-2 text-sm rounded px-2 focus:outline-none w-full"
                type="text"
                placeholder="Add a comment"
                name="text"
              />
            </div>
            <div className="w-2/12">
              <button type="submit" className="text-link text-sm font-bold mx-auto">
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

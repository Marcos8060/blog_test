import React from "react";
import { Formik, Field, Form } from "formik";
import { addComment } from "@/redux/service";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getAllBlogs } from "@/redux/features";

const AddComment = ({ data }) => {
  const dispatch = useDispatch();
  const initialValues = {
    text: "",
  };

  const handleAddComment = async (formValue, helpers) => {
    try {
      await addComment(data.id,formValue.text).then((res) => {
          toast.success(res.message)
          helpers.resetForm();
          dispatch(getAllBlogs());
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
          <div className="flex items-center justify-between">
            <div className="w-10/12">
              <Field
               required
                className="block py-2 text-sm rounded px-4 focus:outline-none w-full"
                type="text"
                placeholder="Add a comment"
                name="text"
              />
            </div>
            <div className="w-2/12">
              <button type="submit" className="text-link text-sm font-bold mx-auto w-full">
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

"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import MyModal from "../../app/@modal/Modal";
import FormError from "../../ui/FormError";
import ModalText from "../../ui/ModalText";
import Label from "@/src/ui/Label";

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

const Form = () => {
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setShowModal(true);
    setSubmittedData(data);
    setError("");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-[24px] w-[17.5rem] md:grid md:grid-cols-[221px_463px] md:w-auto md:gap-y-5 md:gap-x-[20px] lg:grid-cols-[294px_294px] lg:gap-x-5 lg:gap-y-10 lg:mt-[70px]"
    >
      <Label style="relative md:row-start-1 ">
        Full name
        <input
          placeholder="John Smith"
          {...register("firstName", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="block text-[13px] text-white w-full h-6 bg-white/[0.05] pl-2 outline-none"
          aria-describedby="name has to include two words for example John Smith"
        />
        {errors.firstName && <FormError>Incorrect name</FormError>}
      </Label>

      <Label className="relative md:row-start-2 lg:col-start-2 lg:row-start-1">
        E-mail
        <input
          {...register("email", {
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            required: true,
          })}
          placeholder="johnsmith@email.com"
          className="block text-[13px] text-white w-full h-6 bg-white/[0.05] pl-2 outline-none"
          aria-describedby="email have to include @ and dot something like johnsmith@email.com"
        />
        {errors.email && <FormError>Incorrect email</FormError>}
      </Label>
      <Label style="relative md:col-start-2 md:row-start-1 md:row-end-5 lg:col-start-1 lg:row-start-2 lg:col-end-3">
        Message
        <textarea
          {...register("message")}
          className="p-3 block resize-none w-[17.5rem] h-48 bg-white/[0.05] outline-none md:w-full md:h-56 lg:w-full lg:h-[174px]"
        ></textarea>
      </Label>
      <button
        type="submit"
        className="ml-auto w-fit hover:underline underline-offset-4 decoration-1 uppercase text-3xl font-medium text-right md:col-start-2 md:row-start-5 text-white"
      >
        Send
      </button>
      {showModal && (
        <MyModal onClose={() => setShowModal(false)}>
          <ModalText>
            <b>Thank you</b> for your application {submittedData.firstName}
          </ModalText>
          <ModalText>
            Wait for a reply to your mail: {submittedData.email}
          </ModalText>
        </MyModal>
      )}
    </form>
  );
};

export default Form;

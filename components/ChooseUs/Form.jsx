"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import MyModal from "../../app/@modal/Modal";

import FormError from "../../ui/FormError";
import ModalText from "../../ui/ModalText";
import style from "./Form.module.css";
import Label from "../../ui/Label";

const phoneRegExp = /^(?:\+38|38|8)?[0-9]{10}$/; // Регулярний вираз для українського номеру телефону

const phoneSchema = yup.string().matches(phoneRegExp).required();

const schema = yup
  .object({
    firstName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    position: yup.string().required(),
  })
  .required();

const Form = () => {
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const {
    control,
    getValues,
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
      checkbox: false,
    },
  });

  const onSubmit = (data) => {
    phoneSchema
      .validate(data.phone)
      .then(() => {
        setShowModal(true);
        setSubmittedData(data);
        setError("");
        reset();
      })
      .catch(() => {
        setError("Incorrect phone");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-[24px] w-[17.5rem] md:grid md:grid-cols-2 md:w-auto md:gap-y-[16px] md:gap-x-[20px] lg:grid-cols-[290px_290px] lg:gap-x-[24px]"
    >
      <Label style="md:row-start-1">
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

      <Label style="md:row-start-2">
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
      <Label style="md:row-start-3">
        Position
        <input
          {...register("position", {
            required: true,
            pattern: /^(?:\+38|38|8)?[0-9]{10}$/,
          })}
          className="block text-[13px] text-white w-full h-6 bg-white/[0.05] pl-2 outline-none"
          placeholder="Movie maker"
          aria-describedby="name of position"
        />
        {errors.email && <FormError>Incorrect position</FormError>}
      </Label>
      <Label style="md:row-start-4">
        Phone
        <input
          {...register("phone", { required: true })}
          className={`block text-[13px] text-white w-full h-6 bg-white/[0.05] outline-none pl-2`}
          placeholder="+ 38 (097) 12 34 567"
          aria-describedby="phone have to includes + and twenty numbers"
        />
        {errors.phone && <FormError>Incorrect phone</FormError>}
        {error && (
          <p className="absolute right-0 text-xs font-extralight text-[#FF5757]">
            &#215;{error}
          </p>
        )}
      </Label>
      <Label style="md:col-start-2 md:row-start-1 md:row-end-5">
        Message
        <textarea
          {...register("message")}
          className="p-3 block resize-none w-[17.5rem] h-48 bg-white/[0.05] outline-none md:w-[13.8125rem] md:h-56 lg:w-[18.125rem] lg:h-64"
        ></textarea>
      </Label>
      <label className="text-white cursor-pointer hover:underline underline-offset-4 decoration-1 relative text-xs font-extralight mb-1 leading-[1.375rem] md:col-start-1 md:row-start-5">
        <Controller
          name="checkbox"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input
              className={style.checkbox}
              type="checkbox"
              {...field}
              onChange={() => {
                const currentValue = getValues("checkbox");
                setValue("checkbox", !currentValue);
              }}
            />
          )}
        />
        <span className={`${style.checIcon} mr-2 text-white`}></span>I confirm
        my consent to the processing of personal data.
      </label>
      <button
        type="submit"
        className="hover:underline underline-offset-4 decoration-1 uppercase text-3xl font-medium text-right md:col-start-2 md:row-start-5 text-white"
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

"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../globals.css";
import useStore from "../Store/Store";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  shippingAddress: Yup.string().required("Required"),
  firstName: Yup.string(),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  apartment: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip: Yup.string().required("Required"),
  saveInfo: Yup.boolean(),
});

const Sell = () => {
  const { cart } = useStore();
  const [formValues, setFormValues] = useState({
    email: "",
    shippingAddress: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    saveInfo: false,
  });

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    formik.handleChange(e);
  };

  return (
    <div className="w-full bg-black flex flex-col md:flex-row px-10 md:px-0">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full md:w-[55%] md:border-r md:border-neutral-700 flex flex-col justify-between md:pl-52 md:pr-10 pb-20 order-2 md:order-1"
      >
        <figure className="flex flex-col justify-start my-3">
          <img
            src="../favicon.ico"
            className="w-1/6 p-5 -translate-x-1/4"
            alt="logo"
          />
          <figcaption className="text-xs font-bold text-neutral-400">
            <span className="mr-2 text-white">Information</span>
            <span className="mr-2">
              <i className="bi bi-chevron-right"></i>
            </span>
            <span className="mr-2">Shipping</span>
            <span className="mr-2">
              <i className="bi bi-chevron-right"></i>
            </span>
            <span className="mr-2">Payment</span>
          </figcaption>
        </figure>

        <div className="flex flex-col my-3">
          <h3 className="text-white font-bold text-xl">Contact</h3>
          <input
            name="email"
            type="text"
            placeholder="Email or mobile phone number"
            className={`bg-transparent my-2 p-3 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500"
                : ""
            }`}
            value={formik.values.email}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
          <div className="flex items-center">
            <input
              id="emailCheck"
              name="saveInfo"
              type="checkbox"
              className="bg-transparent border w-5 h-5 border-neutral-700 rounded-md cursor-pointer relative appearance-none checked:bg-blue-600 checked:border-transparent"
              checked={formik.values.saveInfo}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="emailCheck" className="ml-2 text-white">
              Email me with news and offers
            </label>
          </div>
        </div>

        <div className="flex flex-col my-3">
          <h3 className="text-white font-bold text-xl my-2">
            Shipping address
          </h3>
          <select
            name="shippingAddress"
            className={`bg-transparent p-3 my-2 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
              formik.touched.shippingAddress && formik.errors.shippingAddress
                ? "border-red-500"
                : ""
            }`}
            value={formik.values.shippingAddress}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          >
            <option className="bg-black" value="">
              Select Country
            </option>
            <option className="bg-black" value="United States">
              United States
            </option>
            <option className="bg-black" value="Canada">
              Canada
            </option>
            <option className="bg-black" value="Germany">
              Germany
            </option>
          </select>
          {formik.touched.shippingAddress && formik.errors.shippingAddress ? (
            <div className="text-red-500 text-sm">
              {formik.errors.shippingAddress}
            </div>
          ) : null}

          <div className="flex w-full my-3 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First name (optional)"
              className={`bg-transparent p-3 w-1/2 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.firstName}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              className={`bg-transparent p-3 w-1/2 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.lastName}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            className={`bg-transparent my-2 p-3 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
              formik.touched.address && formik.errors.address
                ? "border-red-500"
                : ""
            }`}
            value={formik.values.address}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          <input
            name="apartment"
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="bg-transparent my-2 p-3 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700"
            value={formik.values.apartment}
            onChange={handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="flex gap-4 my-2">
            <input
              name="city"
              type="text"
              placeholder="City"
              className={`bg-transparent p-3 w-1/3 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
                formik.touched.city && formik.errors.city
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.city}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              name="state"
              type="text"
              placeholder="State"
              className={`bg-transparent p-3 w-1/3 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
                formik.touched.state && formik.errors.state
                  ? "border-red-500"
                  : ""
              }`}
              value={formik.values.state}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <input
              name="zip"
              type="text"
              placeholder="ZIP code"
              className={`bg-transparent p-3 w-1/3 placeholder:text-sm placeholder:font-bold placeholder:text-neutral-500 outline-none focus:border-blue-700 duration-300 rounded-md border border-neutral-700 ${
                formik.touched.zip && formik.errors.zip ? "border-red-500" : ""
              }`}
              value={formik.values.zip}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex items-center">
            <input
              id="save"
              name="saveInfo"
              type="checkbox"
              className="bg-transparent border w-5 h-5 border-neutral-700 rounded-md cursor-pointer relative appearance-none checked:bg-blue-600 checked:border-transparent"
              checked={formik.values.saveInfo}
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="save" className="ml-2 text-white">
              Save this information for next time
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold px-4 py-5 ms-auto rounded-md hover:bg-blue-700 duration-300 w-1/3"
        >
          Continue to shipping
        </button>
      </form>
      <div className="w-full md:w-[45%] md:pr-52 md:pl-10 pt-10 order-1 md:order-2">
        <ul className="text-white ">
          {cart.map((item) => (
            <li
              key={`${item.id}-${item.color}-${item.size}`}
              className=" flex justify-between items-center pb-3"
            >
              <div className="flex">
                <figure className="relative border border-neutral-800 rounded-md w-16 h-16 mr-3">
                  <img
                    className="rounded-md bg-neutral-900 hover:bg-neutral-800"
                    src={item.image}
                    alt={item.name}
                  />
                  <figcaption className="absolute top-0 right-0 bg-neutral-500 w-5 h-5 rounded-full flex justify-center items-center translate-x-1/2 -translate-y-1/2">
                    <span className="cursor-pointer text-neutral-900 text-xs font-bold">
                      {item.count}
                    </span>
                  </figcaption>
                </figure>
                <div className="flex flex-col justify-center">
                  <p className="text-white font-bold">{item.name}</p>
                  <p className="text-neutral-400 text-xs font-bold">
                    {item.color != "default" ? item.color : ""}
                    {item.size != "default" ? " / " + item.size : ""}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="mb-1">${item.price}.00 </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-sm font-bold mt-10">
          <span className="flex w-full justify-between my-2">
            <p>Subtotal</p>
            <p>
              ${cart.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
              .00
            </p>
          </span>
          <span className="flex w-full justify-between my-2">
            <p>Shipping</p>
            <p className="text-neutral-400">Calculated at next step </p>
          </span>
          <span className="flex w-full justify-between my-2">
            <p className="text-xl">Total</p>
            <div className="flex items-end">
              <span className="text-neutral-400">USD</span>
              <p className="text-xl ms-2">
                ${cart.reduce((acc, curr) => acc + curr.price * curr.count, 0)}
                .00
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sell;

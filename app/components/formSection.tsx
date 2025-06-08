"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import TextField from "./textField";
import { toast } from "./ui/use-toast";

const industryOptions = [
  "Electric Vehicles (EVs)",
  "Autonomous Electric Vehicles",
  "Urban Air Mobility / eVTOL",
  "Micro-Mobility (eBikes, Scooters, etc.)",
  "Shared Mobility/MaaS Providers",
  "Last-Mile Delivery Solutions",
  "Low-Emission Vehicle Fleets",
  "Smart Transportation Systems",
  "Public Transport Integration",
  "EV Charging Stations",
  "Fast / Ultra-Fast Charging",
  "Home & Workplace Charging",
  "Wireless / Inductive Charging",
  "Battery Swapping Stations",
  "Charging Network Management",
  "Smart Grid & Bidirectional (V2X) Charging",
  "Renewable-Energy-Powered Charging",
  "AI-Driven Energy Management",
  "Integrated Solar EVs",
  "EV-Integrated Smart Homes",
  "Swappable-Battery EVs",
  "Blockchain Payments for EV Charging",
  "Smart In-Vehicle Operating Systems",
  "Charging Hardware & Electronics Manufacturers",
  "Electronic Production & Additive Manufacturing",
  "Testing, Measurement & Certification",
  "Consultants & R&D Experts",
  "Investors & Venture Capitalists",
  "Automotive Finance & Insurance",
  "Government Ministries & Departments",
  "City Councils & Local Authorities",
  "Trade Associations & NGOs",
  "Environmentalists",
];

const validationSchema = Yup.object({
  name: Yup.string().trim().required("This is a required field"),

  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("This is a required field"),

  phoneNumber: Yup.string()
    .trim()
    .matches(
      /^\d+$/,
      "Phone number must not contain letters or special characters"
    )
    .required("This is a required field"),

  companyName: Yup.string().trim().required("This is a required field"),

  jobTitle: Yup.string().trim().required("This is a required field"),

  industry: Yup.string().trim().required("This is a required field"),

  consent1: Yup.boolean().oneOf([true], "This is a required field"),
});

type FormTypes =
  | "enquiry"
  | "delegate"
  | "exhibitor"
  | "sponsor"
  | "brochure"
  | "speaker";

const FormSection = ({ type }: { type: FormTypes }) => {
  const router = useRouter();

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const res = await fetch(`/api/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed to submit");
      const data = await res.json();
      router.push(`/register/?t=${type}/thankyou`);
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your submission.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        jobTitle: "",
        industry: "",
        message: "",
        consent1: false,
        consent2: false,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <TextField
          name="name"
          label="Name"
          placeholder="Full Name"
          autoComplete="name"
        />
        <TextField
          name="email"
          label="Work Email"
          type="email"
          autoComplete="email"
          placeholder="Work Email Address"
        />

        <TextField
          name="phoneNumber"
          label="Phone Number"
          placeholder="+91"
          autoComplete="tel"
          maxLength={10}
        />
        <TextField
          name="companyName"
          label="Company Name"
          placeholder="Company Name"
          autoComplete="organization"
        />
        <TextField
          name="industry"
          label="Industry"
          as="select"
          options={industryOptions.map((value) => ({
            value,
            label: value,
          }))}
        />
        <TextField name="jobTitle" label="Job Title" placeholder="Aa" />

        <TextField
          name="message"
          label="Message (if any)"
          as="textarea"
          rows={3}
          placeholder="Write your message..."
        />

        <div className="mb-4">
          <label className="flex items-start text-sm">
            <Field
              type="checkbox"
              name="consent1"
              className="mr-2 mt-1 font-semibold"
            />
            <p>
              I confirm that I have read, understand and accept the event’s
              {"  "}
              <a href="#" className=" underline">
                Terms and Conditions
              </a>
              .
            </p>
          </label>
          <ErrorMessage
            name="consent1"
            component="p"
            className="text-xs text-red-500 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-start text-sm">
            <Field
              type="checkbox"
              name="consent2"
              className="mr-2 mt-1 font-semibold"
            />
            <p>
              Maxpo Exhibitions may contact you from time to time with updates
              and information about our events, products and services that may
              be of interest. We may also pass your details to carefully
              selected third parties and to sponsors and exhibitors at this
              event. Please see our{" "}
              <span className="underline">Privacy Policy</span> for full
              details.
            </p>
          </label>
        </div>

        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            className="bg-transparent text-black border border-black rounded-none hover:bg-gray-50  cursor-pointer  px-8"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormSection;

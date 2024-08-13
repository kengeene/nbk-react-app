import { MoveRight } from "lucide-react";
import FormItem from "./form-item";

export default function FormComponent() {
  const formFields = [
    {
      label: "Full Name",
      placeholder: "Enter your name",
    },
    {
      label: "Phone Number",
      placeholder: "0700000000",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      label: "Message",
      placeholder: "Enter your Message",
    },
  ];
  return (
    <div className="flex flex-col bg-[#3C251F] text-white p-10 text-left">
      <span className="py-3 text-xl">
        Interested in About Bancassurance or have a question?
      </span>
      {formFields.map((field) => (
        <FormItem labelText={field.label} placeholderText={field.placeholder} />
      ))}
      <button className="flex justify-around my-5 p-3 bg-[#FFAF2E] text-[#3C251F]">
        Send My Request
        <MoveRight />
      </button>
    </div>
  );
}

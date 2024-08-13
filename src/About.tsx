import FormComponent from "./form-component";

export default function About() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="m-10 text-left">
          <div className="p-10">
            <span className="text-2xl font-semibold">About Bancassurance</span>
            <p className="font-thin my-5">
              NBK Bancassurance Intermediary limited NBK Bancassurance
              Intermediary Limited, was established in 2009 . It is a
              fully-fledged subsidiary of National Bank of Kenya Limited,
              established to meet the insurance needs of our customers and the
              bank. NBK Bancassurance Intermediary is regulated by the Insurance
              Regulatory Authority. We have partnered with major insuarance
              companies in Kenya to provide you with competitive produts and
              high standards of service.
            </p>
          </div>
          <div className="p-10">
            <span className="text-lg font-semibold">
              {" "}
              Why NBK Bancassurance Intermediary Ltd ( Not Insurance Agency).
            </span>
            <ul className="font-thin my-5">
              <li>
                Convenience of buying insurance through a trusted intermediary
              </li>
              <li>One stop shop for all your insurance and banking needs. </li>
              <li>
                Risk advisory on suitable insurance coverage based on your needs
              </li>
              <li>Insurance claims</li>
            </ul>
          </div>
        </div>
        <div className="m-20">
          <FormComponent />
        </div>
      </div>
    </>
  );
}

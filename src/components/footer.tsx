import FooterImgOne from "@/assets/img/footer/footer-img-1.svg";

export default function Footer() {
  return (
    <>
      <img src={FooterImgOne} />
      <div className="grid grid-cols-5 bg-[#FFBA00] p-10">
        <div className="flex flex-col">
          <h2>For You </h2>
          <div>Open an Account</div>
          <div>Get a Loan</div>
          <div>Invest</div>
          <div>Get a Card</div>
        </div>
        <div className="flex flex-col">
          <h2>For Your Biashara</h2>
          <div>Open an Account</div>
          <div>Get a Loan</div>
          <div>Trade Finance</div>
        </div>
        <div className="flex flex-col">
          <h2>For Corporate</h2>
          <div>Accounts</div>
          <div>Financing</div>
          <div>Services</div>
        </div>
        <div className="flex flex-col">
          <h2>Quick Links</h2>
          <div>FAQs</div>
          <div>Careers</div>
          <div>Complaint Handling</div>
          <div>Service Charter</div>
        </div>
        <div className="flex flex-col">
          <h2>Banking Hours</h2>
          <div>Mon – Fri : 8.30 am - 4.00 pm</div>
          <div>Sat : 8.30 am - 12.00 pm</div>
          <div>Sun : Closed</div>
          <div>Public Holidays : Closed</div>
        </div>
      </div>
    </>
  );
}

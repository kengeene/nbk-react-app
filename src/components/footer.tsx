import FooterImgOne from "@/assets/img/footer/footer-img-1.svg";
import Facebook from "@/assets/img/footer/social-icons/Facebook.svg";
import Instagram from "@/assets/img/footer/social-icons/instagram.svg";
import linkedIn from "@/assets/img/footer/social-icons/linkedIn.svg";
import twitter from "@/assets/img/footer/social-icons/twitter.svg";
import youtube from "@/assets/img/footer/social-icons/youtube.svg";

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
      <div className="grid grid-cols-12 bg-[#3C251F] text-white p-5">
        <div className="text-xs col-span-6">
          Regulated by the Central Bank of Kenya | © 2023 National Bank Limited.
          All Rights Reserved.
        </div>
        <div className="text-xs col-span-5">
          <span>Terms and Conditions</span> | <span>Disclaimer</span> |{" "}
          <span>Tarrif Guide</span> | <span>Internet Privacy Policy</span>
        </div>
        {/* social icons */}
        <div className="flex flex-row space-x-2 col-span-1">
          <span>
            <img src={Facebook} />
          </span>
          <span>
            <img src={twitter} />
          </span>
          <span>
            <img src={youtube} />
          </span>
          <span>
            <img src={Instagram} />
          </span>
          <span>
            <img src={linkedIn} />
          </span>
        </div>
      </div>
    </>
  );
}

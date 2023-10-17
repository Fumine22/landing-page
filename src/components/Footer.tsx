import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-[#999] bg-[#191919]">
      <div className="container">
        <div className="py-[80px] mx-auto">
          <div className="mb-[30px] md:flex md:gap-5 md:justify-around">
            <div className="mb-[30px] text-[15px]/[28px] md:flex-1 md:w-1/4">
              <h3 className="text-[#fff] text-[22px]/[32px] font-extrabold py-[30px]">
                Blue Air Fly High
              </h3>

              <div className="border-[#fff] w-10 border-b-2 mb-[35px]" />

              <p className="mb-[30px]">
                Street 238,52 tempor <br />
                Donec ultricies mattis nulla, suscipit
              </p>

              <p>
                <span className="text-[#fff] min-w-[55px] inline-block">
                  Phone:
                </span>{" "}
                0.123.456.789 <br />
                <span className="text-[#fff] min-w-[55px] inline-block">
                  Email:
                </span>{" "}
                support@sitename.com <br />
                <span className="text-[#fff] min-w-[55px] inline-block">
                  Web:
                </span>{" "}
                https://demo.com/
              </p>
            </div>

            <div className="mb-[30px] md:flex-1 md:w-1/4">
              <h3 className="text-[#fff] text-[22px]/[32px] font-extrabold py-[30px] uppercase">
                our services
              </h3>

              <div className="border-[#fff] w-10 border-b-2 mb-[35px]" />

              <ul className="flex flex-col gap-3">
                <li className="flex gap-2 items-center text-[#fff]">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Home</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>About Us</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Services</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Blog</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>

            <div className="mb-[30px] md:flex-1 md:w-1/4">
              <h3 className="text-[#fff] text-[22px]/[32px] font-extrabold py-[30px] uppercase">
                quick links
              </h3>

              <div className="border-[#fff] w-10 border-b-2 mb-[35px]" />

              <ul className="flex flex-col gap-3">
                <li className="flex gap-2 items-center text-[#fff]">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Home</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>About Us</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Services</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Blog</p>
                </li>

                <li className="flex gap-2 items-center">
                  <ArrowRight className="w-[15px] h-[15px]" />
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>

            <div className="mb-[30px] md:flex-1 md:w-1/4">
              <h3 className="text-[#fff] text-[22px]/[32px] font-extrabold py-[30px] uppercase">
                newsletter
              </h3>

              <div className="border-[#fff] w-10 border-b-2 mb-[35px]" />

              <form
                action="#"
                className="relative mb-5 pb-10 border-b border-b-[#262A30]"
              >
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Enter your email"
                  className="rounded-[5px] w-full pt-3 pb-[9px] px-[13px]"
                />

                <input
                  type="submit"
                  value="Go"
                  className="absolute bg-[#141414] rounded-[4px] font-semibold w-10 h-10 right-[3px] top-[3px]"
                />
              </form>

              <div className="mt-5 flex gap-5 justify-center">
                <Facebook className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
                <Twitter className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
                <Youtube className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
                <Instagram className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
                <Mail className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
                <Linkedin className="bg-[#000] text-[#fff] rounded-full w-10 h-10 p-2" />
              </div>
            </div>
          </div>

          <div className="border-t-[#262A30] border-t">
            <div className="mx-auto text-[#f8f8f8] pt-[25px] text-center">
              <p>
                © Copyright 2018.{" "}
                <Link href="#" className="text-[#f8f8f8] opacity-[0.7]">
                  IT Solution Pro.
                </Link>{" "}
                All Rights Reserved by SKT Themes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

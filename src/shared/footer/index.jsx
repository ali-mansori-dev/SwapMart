import React from "react";
import { Container } from "@mui/material";
import Logo from "../../assets/Logo.svg";
import LogoInsta from "../../assets/icon/logo-instagram.svg";
import LogoYoutube from "../../assets/icon/logo-youtube.svg";
import LogoTwitter from "../../assets/icon/logo-twitter.svg";
import Mail from "../../assets/icon/mail-outline.svg";
import Phone from "../../assets/icon/call-outline.svg";

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-400">
      <Container maxWidth="lg" className="flex flex-col py-12 gap-12">
        <div className="flex flex-row justify-between items-center">
          <img src={Logo} className="w-[200px]" />
          <div className="flex flex-rowm gap-8">
            <img className="w-8" src={LogoInsta} />
            <img className="w-8" src={LogoYoutube} />
            <img className="w-8" src={LogoTwitter} />
          </div>
        </div>
        <div className="border-t border-gray-300"></div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-gray-700 text-xl font-bold pb-4">
              Swap Mart
            </span>
            <span className="text-gray-700 text-base">Privacy</span>
            <span className="text-gray-700 text-base">Terms</span>
            <span className="text-gray-700 text-base">Consumer Health Data</span>
            <span className="text-gray-700 text-base">Payments Terms of Use</span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-gray-700 text-xl font-bold pb-4">Blogs</span>
            <span className="text-gray-700 text-base">Best Books</span>
            <span className="text-gray-700 text-base">Review Doge</span>
            <span className="text-gray-700 text-base">Consumer Health Data</span>
            <span className="text-gray-700 text-base">Payments Terms of Use</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-gray-700 text-xl font-bold pb-4">FAQs</span>
            <span className="text-gray-700 text-base">About us</span>
            <span className="text-gray-700 text-base">Contact us</span>
            <span className="text-gray-700 text-base">Payment Problem</span>
            <span className="text-gray-700 text-base">Website Bugs</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-gray-700 text-xl font-bold pb-4">
              Contact Info
            </span>
            <a href="to:ali.mansi.dev@gmail.com" className="text-gray-700 text-base flex flex-wrap"><img className="w-6" src={Mail}/><span className="px-2">ali.mansi.dev@gmail.com</span></a>
            <a href="to:ali.mansi.dev@gmail.com" className="text-gray-700 text-base flex flex-wrap"><img className="w-6" src={Phone}/><span className="px-2">+989919531749</span></a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLocationPin, faLocationPinLock, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bike, Locate, LocationEditIcon, Mail, MapIcon, PhoneCall } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-app-green text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex gap-2">
              <Bike />
              <span>InstantMart</span>
            </div>
            <p className="text-white/70">
              Bringing fresh, organic groceries straight from local farms to
              your doorstep. Nourish your home with Earth's finest
            </p>
            <div className="flex gap-3">
              <Link
                to={"/"}
                className="p-1 bg-white/10 rounded-lg hover:bg-white/25"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                to={"/"}
                className="p-1 bg-white/10 rounded-lg hover:bg-white/25"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
              <Link
                to={"/"}
                className="p-1 bg-white/10 rounded-lg hover:bg-white/25"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold uppercase">Quick Links</p>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              All Products
            </Link>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              Flash Deals
            </Link>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              Track Order
            </Link>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              Delivery Partner
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold uppercase">Customer Service</p>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              My Account
            </Link>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              Order History
            </Link>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              Addresses
            </Link>
            <Link to={"/"} className="text-white/70 hover:text-white text-sm">
              Help Center
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="uppercase font-bold">Contact Us</p>
            <div className="flex gap-2">
              <LocationEditIcon />
              <p className="text-white/70">123 Green Valley Rd, Portland</p>
            </div>
            <div className="flex gap-2">
              <PhoneCall />
              <p className="text-white/70">+1 (111) 123-4567</p>
            </div>
            <div className="flex gap-2">
              <Mail />
              <p className="text-white/70">hello@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

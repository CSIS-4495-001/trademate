import React from "react";

const InfoBanner = () => {
  return (
    <div className="bg-blue-500 text-white py-4 text-center">
      <div className="flex items-center justify-center">
        <img
          src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
          alt="Firebase Logo"
          className="w-8 h-8 mr-2"
        />
        <p className="font-semibold text-lg">
          Need more information? Visit our{" "}
          <a
            href="https://firebase.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Firebase account
          </a>
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;

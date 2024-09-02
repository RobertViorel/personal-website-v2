"use client";

import ReactCookieConsent from 'react-cookie-consent';

export function CookieConsent() {
  return (
    <div>
      <ReactCookieConsent
        location="bottom"
        buttonText="Accept All"
        enableDeclineButton={true}
        declineButtonText="Decline"
        cookieName="RobertCookie"
        style={{
          background: "#189AB4",
          borderRadius: "10px",
          margin: "10px",
        }}
        buttonStyle={{
          background: "#05445E",
          color: "#D4F1F4",
          fontSize: "13px",
          margin: "10px",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "500",
        }}
        declineButtonStyle={{
          background: "#D4F1F4",
          color: "#05445E",
          fontSize: "13px",
          margin: "10px",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "500",
        }}
        expires={150}
        contentClasses="RobertCookies"
      >
        <h3 className="text-#D4F1F4 font-bold font-mono text-[18px]">Cookie Consent</h3>
        <p className="mt-3 text-#D4F1F4 text-[14px] font-sans">
          Cookies are used to enhance your browsing experience and analyze traffic. By clicking "Accept All", you consent to the use of cookies.
        </p>
      </ReactCookieConsent>
    </div>
  );
}

import React, { useState } from "react";

export default function SignIn() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const sendOtp = () => {
    if (phone.length >= 10) {
      setOtpSent(true);
      alert(`OTP sent to ${phone} (Simulated)`);
    } else {
      alert("Enter a valid phone number");
    }
  };

  const verifyOtp = () => {
    if (otp === "1234") {
      setVerified(true);
      alert("Phone number verified successfully!");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        {!otpSent && !verified && (
          <>
            <h2 className="text-2xl font-extrabold mb-6 text-center text-slate-800">
              Sign In with Phone
            </h2>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
            <button
              onClick={sendOtp}
              className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold hover:bg-sky-700 transition"
            >
              Send OTP
            </button>
          </>
        )}

        {otpSent && !verified && (
          <>
            <h2 className="text-2xl font-extrabold mb-6 text-center text-slate-800">
              Enter OTP
            </h2>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Verify OTP
            </button>
          </>
        )}

        {verified && (
          <div className="text-center text-green-700 font-semibold text-xl">
            🎉 You are signed in successfully!
          </div>
        )}
      </div>
    </div>
  );
}

"use client"

import React, { useState } from "react";
 
function SubscribeNewsletter() {
  const [email, setEmail] = useState("");
  const handleSubscribe = async (evt) => {
    evt.preventDefault();
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email }),
    //   "Content-Type": "application/json",
    });
    const payload = await res.json();
    if (payload.success) {
      alert(payload.message);
    } else {
      alert("Failed to subscribe to newsletter");
    }
  };
  return (
    <div className="flex flex-col items-center mb-10">
      <form
        onSubmit={handleSubscribe}
        className="flex flex-row items-center gap-2 w-full max-w-[500px]"
      >
        <input
          type="email"
          placeholder="Enter email address"
          required
          onChange={(evt) => setEmail(evt.target.value)}
          className="border w-4/4 p-2 focus-within:outline-blue-200"
          style={{ borderRadius: '25px', color:'black' }}
        />
        <button
          role="submit"
          className="bg-[#554DD1] p-2 w-4/4 text-white focus:outline-blue-200 outline-offset-2"
          style={{ borderRadius: '25px' }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
export default SubscribeNewsletter;
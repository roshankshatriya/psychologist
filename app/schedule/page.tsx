"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TimeSlotPopup from "../components/TimeSlotPopup";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FiClock } from "react-icons/fi";




export default function SchedulePage() {
  const router = useRouter();

  // Session mode state
  const [mode, setMode] = useState<"In-Person" | "Online">("In-Person");

  // Time popup state
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6f1ff] via-[#f6e9ff] to-[#ffe6e6] text-gray-900 flex flex-col">
      
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-sm">
        <div className="px-4 py-5 flex items-center gap-3">
          <Link href="/psychologists">
            <FiArrowLeft className="text-2xl text-gray-700 cursor-pointer" />
          </Link>
          <h1 className="text-lg font-semibold text-gray-800">
            Schedule Session
          </h1>
        </div>
      </div>

      <div className="pt-[78px] px-5 pb-32 overflow-y-auto">

        {/* Patient Details */}
        <h2 className="text-gray-600 font-medium mb-2">Patient</h2>
        <div className="flex items-center bg-white p-3 rounded-2xl shadow-sm gap-3 mb-6">
          <Image
            src="/images/patient.jpg"
            alt="alice"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div> 
            <p className="font-semibold text-gray-800">Alice Patient</p>
            <p className="text-sm text-gray-600">+91 9876543210</p>
          </div>
        </div>

        {/* Docter Assigned Details */}
        <h2 className="text-gray-600 font-medium mb-2">Assign Practitioner</h2>
        <div className="flex items-center bg-white p-3 rounded-2xl shadow-sm gap-3 mb-6">
          <Image
            src="/images/patient.jpg"
            alt="alice"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">Alice Docter</p>
            <p className="text-sm text-gray-600">+91 9876543210</p>
          </div>
        </div>


        <h2 className="text-gray-600 font-medium mb-2">Session Type</h2>
        <div className="bg-white p-3 rounded-2xl shadow-sm flex justify-between items-center mb-6">
          <span className="text-gray-800">Counselling (1 hour)</span>
          <FiChevronDown className="text-xl text-gray-600" />

        </div>

        {/* Two Tabs */}
        <h2 className="text-gray-600 font-medium mb-2">Session Mode</h2>

        <div className="flex items-center gap-8 mb-6">
          {/* In-Person */}
          <button onClick={() => setMode("In-Person")} className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                ${mode === "In-Person" ? "border-black bg-black" : "border-gray-400"}`}
            >
              {mode === "In-Person" && <span className="w-2 h-2 rounded-full bg-white" />}
            </span>
            <span
              className={`text-lg ${
                mode === "In-Person" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              In-Person
            </span>
          </button>

          {/* Online */}
          <button onClick={() => setMode("Online")} className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                ${mode === "Online" ? "border-black bg-black" : "border-gray-400"}`}
            >
              {mode === "Online" && <span className="w-2 h-2 rounded-full bg-white" />}
            </span>
            <span
              className={`text-lg ${
                mode === "Online" ? "text-black font-semibold" : "text-gray-600"
              }`}
            >
              Online
            </span>
          </button>
        </div>

        {/* Date & Time Slot */}
        <section className="grid grid-cols-2 gap-4 mb-6">

          {/* Date */}
          <div>
            <h2 className="text-gray-600 mb-2">Session Date</h2>
            <div className="bg-white p-3 rounded-2xl shadow-sm flex justify-between items-center">
              <input
                type="date"
                defaultValue="YYYY-MM-DD"
                className="bg-transparent outline-none text-gray-700 text-sm w-full"
              />
              {/* <FiCalendar className="text-xl text-gray-500" /> */}
            </div>
          </div>

          {/* Time */}
          <div>
            <h2 className="text-gray-600 mb-2">Session Time Slot</h2>

            {/* Popup Details */}
            <div
              onClick={() => setShowPopup(true)}
              className="bg-white p-3 rounded-2xl shadow-sm flex justify-between items-center cursor-pointer"
            >
              <span className="text-gray-700 text-sm">
                {selectedTime || "HH : MM"}
              </span>
              <FiClock className="text-xl text-gray-500" />


            </div>
          </div>
        </section>

        {/* Link will open for the Online Mode */}
        {mode === "Online" && (
          <>
            <h2 className="text-gray-600 mb-2">Online Session Link</h2>
            <div className="bg-white p-3 rounded-2xl shadow-sm mb-6">
              <input
                type="text"
                placeholder="Add Online Session Link or WhatsApp Number"
                className="w-full bg-transparent outline-none text-gray-700 text-sm placeholder-gray-400"
              />
            </div>
          </>
        )}

        <h2 className="text-gray-600 font-medium mb-2">
          Session Details (Optional)
        </h2>
        <textarea
          placeholder="Enter session details here"
          className="w-full bg-white p-3 rounded-2xl shadow-sm text-gray-700 h-28 outline-none resize-none"
        />
      </div>

      {/* Bottom Button FIxed */}
      <div className="fixed bottom-0 left-0 w-full bg-white/60 backdrop-blur-md flex justify-between px-5 py-4 border-t border-gray-200">
        <button
          onClick={() => router.back()}
          className="w-[48%] border-2 border-[#ff9e9e] text-[#ff9e9e] font-medium py-3 rounded-2xl"
        >
          Cancel
        </button>

        <button className="w-[48%] bg-gradient-to-r from-[#b892ff] to-[#ff9e9e] text-white font-medium py-3 rounded-2xl shadow-md">
          Confirm
        </button>
      </div>

      {/* Time Slot Popup */}
      <TimeSlotPopup
        open={showPopup}
        onClose={() => setShowPopup(false)}
        onConfirm={(time) => setSelectedTime(time)}
      />
    </main>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TimeSlotPopup from "../components/TimeSlotPopup";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

interface BookingDetails {
  patient: string;
  practitioner: string;
  sessionType: string;
  mode: "In-Person" | "Online";
  date: string;
  time: string;
  details: string;
}

export default function SchedulePage() {
  const router = useRouter();

  // Session mode state
  const [mode, setMode] = useState<"In-Person" | "Online">("In-Person");

  // Time popup state
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  // Form state
  const [selectedDate, setSelectedDate] = useState("");
  const [sessionDetails, setSessionDetails] = useState("");

  // Confirmation state
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const handleConfirm = () => {
    const booking: BookingDetails = {
      patient: "Alice Patient",
      practitioner: "Alice Docter",
      sessionType: "Counselling (1 hour)",
      mode: mode,
      date: selectedDate || "Select Date",
      time: selectedTime || "Select Time",
      details: sessionDetails,
    };
    setBookingDetails(booking);
    setIsConfirmed(true);
  };

  if (isConfirmed && bookingDetails) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#f6f1ff] via-[#f6e9ff] to-[#ffe6e6] text-gray-900 flex flex-col">

        {/* Header */}
        <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-sm">
          <div className="px-4 py-5 flex items-center gap-3">
            <button
              onClick={() => setIsConfirmed(false)}
              className="text-2xl text-gray-700 cursor-pointer hover:text-gray-900"
            >
              <FiArrowLeft />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">
              Booking Confirmed
            </h1>
          </div>
        </div>

        <div className="pt-[78px] px-5 pb-32 overflow-y-auto flex flex-col items-center justify-center">
          {/* Success Icon */}
          <div className="mt-8 mb-6">
            <div className="relative w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#b892ff] to-[#ff9e9e] rounded-full opacity-20 animate-pulse"></div>
              <FiCheckCircle className="text-5xl text-green-500 relative z-10" />
            </div>
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Session Booked Successfully!
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Your session has been confirmed with {bookingDetails.practitioner}
          </p>

          {/* Booking Details Card */}
          <div className="bg-white/50 backdrop-blur-md p-5 rounded-3xl shadow-md w-full max-w-md mb-6">
            {/* Header with patient info */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {bookingDetails.time}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {bookingDetails.date}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/patient.jpg"
                  alt="Doctor"
                  width={45}
                  height={40}
                  className="rounded-full border border-gray-200"
                />
                <div>
                  <p className="font-medium text-gray-800">{bookingDetails.practitioner}</p>
                  <span className="bg-purple-200 text-purple-600 text-xs px-3 py-1 rounded-xl mt-1 inline-block shadow-sm">
                    Confirmed
                  </span>
                </div>
              </div>
            </div>

            {/* Session Details */}
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="text-gray-600 font-medium">Session Type</p>
                <p className="text-gray-800">{bookingDetails.sessionType}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Session Mode</p>
                <p className="text-gray-800">{bookingDetails.mode}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Patient</p>
                <p className="text-gray-800">{bookingDetails.patient}</p>
              </div>
              {bookingDetails.details && (
                <div>
                  <p className="text-gray-600 font-medium">Notes</p>
                  <p className="text-gray-800">{bookingDetails.details}</p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-md space-y-3">
            <button
              onClick={() => router.push("/")}
              className="w-full bg-gradient-to-r from-[#b892ff] to-[#ff9e9e] text-white font-medium py-3 rounded-2xl shadow-md hover:scale-105 transition"
            >
              Go to Home
            </button>
            <button
              onClick={() => setIsConfirmed(false)}
              className="w-full border-2 border-gray-300 text-gray-800 font-medium py-3 rounded-2xl hover:bg-gray-50 transition"
            >
              Schedule Another Session
            </button>
          </div>
        </div>
      </main>
    );
  }

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
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
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
          value={sessionDetails}
          onChange={(e) => setSessionDetails(e.target.value)}
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

        <button
          onClick={handleConfirm}
          className="w-[48%] bg-gradient-to-r from-[#b892ff] to-[#ff9e9e] text-white font-medium py-3 rounded-2xl shadow-md hover:scale-105 transition"
        >
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

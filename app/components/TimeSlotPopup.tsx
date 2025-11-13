"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: (time: string) => void;
}

export default function TimeSlotPopup({ open, onClose, onConfirm }: Props) {
  if (!open) return null;

  // Properly hold selected time inside state
  const [selected, setSelected] = useState("");

  const slots = {
    Morning: ["08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM"],
    Evening: ["04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"],
    Night: ["08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"],
  };

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/30 backdrop-blur-sm">
      
    
      <div
        className="w-full bg-white rounded-t-[35px] p-6 max-h-[80vh] overflow-y-auto"
        style={{ animation: "slideUp 0.3s ease-out" }}
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <div></div>
          <h2 className="text-lg font-semibold text-gray-800">
            Select Session Time
          </h2>
          <button
            onClick={onClose}
            className="text-2xl text-gray-600 font-light"
          >
            ×
          </button>
        </div>

        {/* Time Sections */}
        {Object.entries(slots).map(([title, times]) => (
          <div key={title} className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>

            <div className="grid grid-cols-3 gap-3">
              {times.map((t) => {
                const active = selected === t;

                return (
                  <button
                    key={t}
                    onClick={() => setSelected(t)} // selection works properly
                    className={`py-2 rounded-xl text-sm border transition
                      ${
                        active
                          ? "border-[#d67a7a] bg-[#ffe6e6] text-[#d67a7a] font-semibold"
                          : "border-[#e6a8a8] text-[#d67a7a]"
                      }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Footer Buttons */}
        <div className="flex gap-5 mt-4 pb-3">
          
          {/* Cancel Button*/}
          <button
            onClick={() => {
              onClose();
            }}
            className="w-1/2 border-2 border-[#e6a8a8] text-[#d77d7d] py-3 rounded-2xl font-medium"
          >
            Cancel
          </button>

          {/* Confirm Button */}
          <button
            disabled={!selected}
            onClick={() => {
              onConfirm(selected); 
              onClose();
            }}
            className={`w-1/2 py-3 rounded-2xl font-medium text-white
              ${
                selected
                  ? "bg-gradient-to-r from-[#b892ff] to-[#ff9e9e]"
                  : "bg-gray-300"
              }`}
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

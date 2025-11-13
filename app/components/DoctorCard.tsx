"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";


interface DoctorCardProps {
  name: string;
  phone: string;
  expertise: string;
  gender?: string;
  mode?: string;
  fee?: string;
  image: string;
  expanded?: boolean;
}

export default function DoctorCard({
  name,
  phone,
  expertise,
  gender,
  mode,
  fee,
  image,
  expanded,
}: DoctorCardProps) {
  const router = useRouter();

  return (
    <div className="bg-white rounded-3xl mx-5 shadow-sm p-4">
      {/* Docter Info Display */}
      <div className="flex items-center gap-3">
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />

        <div className="flex flex-col w-full">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{phone}</p>

          {!expanded && (
            <p className="text-sm text-gray-700 mt-[2px]">{expertise}</p>
          )}
        </div>
        <div className="flex items-center justify-between ">
          <div className="text-sm text-gray-800"></div>
          <FiChevronDown className="text-xl text-gray-600" />
        </div>

      </div>

    
      {expanded && (
        <>
          
          <div className="border-t border-gray-200 my-3" />

          <div className="grid grid-cols-2 text-sm gap-y-3 text-gray-800">
            <div>
              <p className="font-medium text-gray-900">Expertise</p>
              <p className="text-gray-700">{expertise}</p>
            </div>

            <div className="text-right">
              <p className="font-medium text-gray-900">Gender</p>
              <p className="text-gray-700">{gender}</p>
            </div>

            <div>
              <p className="font-medium text-gray-900">Session mode</p>
              <p className="text-gray-700">{mode}</p>
            </div>

            <div className="text-right">
              <p className="font-medium text-gray-900">Session Fee</p>
              <p className="text-gray-700">{fee}</p>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => router.push("/schedule")}
            className="w-full bg-gradient-to-r from-[#b892ff] to-[#ff9e9e] 
                       text-white py-3 rounded-2xl shadow-md mt-4 
                       hover:scale-105 transition-all"
          >
            Book Now
          </button>
        </>
      )}
    </div>
  );
}

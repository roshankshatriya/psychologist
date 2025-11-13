import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#c6a8ff] via-[#e3b9ff] to-[#f7c5c5] rounded-b-[40px] px-5 pt-6 pb-8 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-sm text-white/90">Good morning,</p>
          <h1 className="text-2xl font-semibold text-white">Manjunath Naik</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src="/images/patient.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>

      {/* Search bar header */}
      <div className="flex items-center bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-inner">
        <input
          type="text"
          placeholder="Search Psychologists..."
          className="flex-grow bg-transparent text-gray placeholder-gray/70 outline-none"
        />
        <FiSearch className="text-xl text-gray-600 mr-3" />
        <IoFilter className="text-2xl text-gray-600" />
      </div>
    </header>
  );
}

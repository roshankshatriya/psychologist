import DoctorCard from "../components/DoctorCard";
import { FiArrowLeft } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoFilter } from "react-icons/io5";
import { FiGrid } from "react-icons/fi";
import Link from "next/link";


export default function PsychologistsPage() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Tejas",
      phone: "+91 98765 43210",
      expertise: "Gynaecology",
      gender: "Male",
      mode: "In-Person & Online",
      fee: "₹1,500/-",
      image: "/images/patient.jpg",
      expanded: true,
    },
    {
      id: 2,
      name: "Dr. Priya",
      phone: "+91 98765 43210",
      expertise: "IVF Specialist",
      image: "/images/patient.jpg",
    },
    {
      id: 3,
      name: "Dr. Pranav",
      phone: "+91 98765 43210",
      expertise: "Gynaecology",
      image: "/images/patient.jpg",
    },
    {
      id: 4,
      name: "Dr. Toshiba",
      phone: "+91 9876 543210",
      expertise: "Psychologist",
      image: "/images/patient.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6f1ff] via-[#f6e9ff] to-[#ffe6e6] text-gray-900 pb-12">
      
      {/* Fixed Top Header */}
      <div className="flex-shrink-0 fixed top-0 left-0 w-full z-20 flex bg-white items-center gap-3 py-5 px-3 shadow-sm">
      
        <Link href="/">
          <FiArrowLeft className="text-2xl text-gray-700 cursor-pointer" />
        </Link>
        <h1 className="text-lg font-semibold text-black">Available Doctors</h1>
      </div>

      <div className="pt-[90px]">
        <header className="px-5">
          {/* Search Bar */}
          <div className="flex items-center bg-white/100 rounded-2xl px-4 py-2 ">
            <input
              type="text"
              placeholder="Search Psychologists..."
              className="flex-grow bg-transparent text-gray-700 placeholder-gray-400 outline-none text-sm"
            />
            <div className="flex items-center gap-3 text-gray-600">
              <FiSearch className="text-xl text-gray-600 mr-2" />
              <FiGrid className="text-2xl text-gray-700" />
              <IoFilter className="text-2xl text-gray-600" />
            </div>
          </div>
        </header>

        {/* Doctor List */}
        <section className="mt-6 space-y-4">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} {...doc} />
          ))}
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function SessionCard() {
  return (
    <div className="bg-white/50 backdrop-blur-md p-4 rounded-3xl shadow-md mx-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">11:00 AM</h3>
          <p className="text-sm text-gray-600">Bandra</p>
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
            <p className="font-medium text-gray-800">Dr. Kiran</p>
            <button className="bg-purple-200 text-purple-600 text-xs px-3 py-1 rounded-xl mt-1 shadow-sm">
              📞 
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-700">
        <p>Session Duration: <strong>01:00 HR</strong></p>
        <p>Session Mode: <strong>Online</strong></p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-5 py-2 rounded-xl text-sm shadow-md hover:scale-105 transition">
          Mark as Completed
        </button>
        <p className="text-xs text-gray-600 text-right">
          Previous Session: <br />
          <span className="font-medium">Tuesday, March 5, 2023</span>
        </p>
      </div>
    </div>
  );
}

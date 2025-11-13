interface PastSession {
  name: string;
  time: string;
  date: string;
}

export default function PastSessionCard({ name, time, date }: PastSession) {
  return (
    <div className="bg-white/50 backdrop-blur-md p-4 rounded-3xl shadow-sm mx-5 flex items-center space-x-4">
      {/* Time Section */}
      <div className="w-[80px] text-right">
        <h3 className="text-base font-semibold text-gray-800">{time}</h3>
      </div>

      <div className="h-10 w-[1px] bg-gray-300/70" />

      {/* Details Section */}
      <div className="flex-1">
        <p className="text-gray-800 font-medium">{name}</p>
        <p className="text-xs text-gray-600 mt-[2px]">
          Previous Session:
          <br />
          <span className="font-medium">{date}</span>
        </p>
      </div>
    </div>
  );
}

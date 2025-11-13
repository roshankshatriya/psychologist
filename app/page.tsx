import Header from "./components/Header";
import SessionCard from "./components/SessionCard";
import PastSessionCard from "./components/PastSessionCard";
import { pastSessions } from "./components/data";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col bg-gradient-to-b from-[#fdf9ff] via-[#fff3f3] to-[#ffecec] text-gray-900 overflow-hidden">
      {/* Fixed Header */}
      <div className="flex-shrink-0 fixed top-0 left-0 w-full z-20">
        <Header />
      </div>

      <main className="flex-1 mt-[180px] mb-[90px] overflow-y-auto">
        {/* Upcoming Session */}
        <section className="mt-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 mx-5">
            Upcoming Session
          </h2>
          <SessionCard />
        </section>

        {/* Past Sessions */}
        <section className="mt-8 pb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 mx-5">
            Past Sessions
          </h2>
          <div className="space-y-3">
            {pastSessions.map((session, index) => (
              <PastSessionCard key={index} {...session} />
            ))}
          </div>
        </section>
        
      </main>

      {/* Fixed Bottom Button */}
      <div className="flex-shrink-0 fixed bottom-5 left-0 w-full px-5 z-20">
        <Link href="/psychologists">
          <button className="w-full bg-gradient-to-r from-[#b892ff] to-[#ff9e9e] text-white py-5 rounded-2xl shadow-lg hover:scale-105 transition-all backdrop-blur-md">
            Schedule Now
          </button>
        </Link>
      </div>
    </div>
  );
}

// app/page.tsx
"use client";
import PostScheduler from '../components/PostScheduler';
import ActivityHeatmap from '../components/ActivityHeatmap';
import EngagementGraph from '../components/EngagementGraph';
import CommunitySelector from '../components/CommunitySelector';
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Please Sign In</h1>
        <button
          onClick={() => window.location.href = "/auth/signin"}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Social Media Post Scheduler</h1>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
        </div>

        <CommunitySelector
          selectedCommunities={selectedCommunities}
          setSelectedCommunities={setSelectedCommunities}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PostScheduler selectedCommunities={selectedCommunities} />
          <EngagementGraph data={[]} />
          <ActivityHeatmap data={[]} />
        </div>
      </div>
    </main>
  );
}
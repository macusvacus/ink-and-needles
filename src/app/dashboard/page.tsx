export default async function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col">
      <header className="border-b border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter uppercase text-white">
            Dashboard
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-zinc-800" />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50">
            <h2 className="text-lg font-medium text-zinc-400 mb-2">Upcoming Appointments</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50">
            <h2 className="text-lg font-medium text-zinc-400 mb-2">Saved Artists</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50">
            <h2 className="text-lg font-medium text-zinc-400 mb-2">Messages</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
      </main>
    </div>
  );
}

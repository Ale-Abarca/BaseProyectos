import { UserList } from "@/app/features/user-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-start justify-center py-12 px-4">
      <main className="w-full max-w-4xl bg-white dark:bg-[#0b0b0b] rounded-lg shadow-md p-8">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            User List App
          </h1>
          <p className="text-sm text-zinc-500">
            Simple user management
          </p>
        </header>

        <section className="space-y-6">
          <UserList />
        </section>
      </main>
    </div>
  );
}

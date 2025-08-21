export default function NotFound() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2 text-slate-600">Try Compare Cities, City Scouting, or Find Your City.</p>
      <div className="mt-4 flex gap-2">
        <a className="btn btn-outline" href="/compare">Compare Cities</a>
        <a className="btn btn-outline" href="/snapshot">City Scouting Report</a>
        <a className="btn btn-outline" href="/wizard">Find Your City</a>
      </div>
    </main>
  );
}

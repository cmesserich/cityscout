import Link from "next/link";
import { NAV_ITEMS } from "./navItems";

export default function Footer() {
  return (
    <footer className="section py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} CityScout
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {NAV_ITEMS.map((n) => (
            <Link key={n.href} href={n.href} className="hover:underline">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { DEMO_ADMIN, DEMO_MODE } from "./config";
import { db } from "./db";

const DemoBanner = () => {
  const [open, setOpen] = useState(false);

  if (!DEMO_MODE) return null;

  const handleReset = () => {
    db.reset();
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] text-xs font-sans">
      {open ? (
        <div className="w-80 rounded-xl bg-white text-gray-800 shadow-2xl border border-blue-200 overflow-hidden">
          <div className="bg-[#005bab] text-white px-4 py-2.5 flex items-center justify-between">
            <span className="font-bold tracking-wide flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              INTERACTIVE DEMO MODE
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white font-bold px-1"
              aria-label="Minimize demo panel"
            >
              ✕
            </button>
          </div>
          <div className="p-3.5 space-y-3">
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Running fully in your browser with local demo data — no backend required. All dashboard edits persist in{" "}
              <code className="bg-gray-100 px-1 rounded">localStorage</code>.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-2.5 space-y-1">
              <p className="font-semibold text-[#005bab]">Admin Dashboard Login</p>
              <p>
                Email: <code className="font-mono font-semibold">{DEMO_ADMIN.email}</code>
              </p>
              <p>
                Password: <code className="font-mono font-semibold">{DEMO_ADMIN.password}</code>
              </p>
              <a
                href="/admin-login"
                className="mt-1.5 inline-block w-full text-center bg-[#005bab] hover:bg-blue-800 text-white font-semibold py-1.5 rounded-md transition"
              >
                Open Admin Dashboard →
              </a>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2.5 space-y-1">
              <p className="font-semibold text-gray-800">Quick Features to Try</p>
              <ul className="space-y-1 text-[11px] text-gray-600">
                <li>
                  • <strong>Vehicle Finder:</strong> Passenger Car → Hybrid → Toyota → Prius → 2022
                </li>
                <li>
                  • <strong>Warranty Check:</strong>{" "}
                  <a href="/manage-my-battery" className="text-[#005bab] underline">
                    Manage My Battery
                  </a>{" "}
                  (<code className="font-mono">GB-N70Z</code> / <code className="font-mono">01711223344</code>)
                </li>
                <li>
                  • <strong>Dealer Locator:</strong>{" "}
                  <a href="/find-dealer" className="text-[#005bab] underline">
                    Find Dealer
                  </a>{" "}
                  (Dhaka → Dhaka → Tejgaon)
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="w-full py-1.5 rounded-md border border-red-300 text-red-600 hover:bg-red-50 font-semibold transition"
            >
              Reset Demo Data
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-[#005bab] hover:bg-blue-800 text-white px-3.5 py-2 rounded-full shadow-lg border border-white/20 font-semibold transition"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Demo Guide &amp; Admin
        </button>
      )}
    </div>
  );
};

export default DemoBanner;

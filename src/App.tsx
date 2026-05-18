import "./App.css";
import { useState } from "react";
import { CampusMapOverlay } from "./components/CampusMapOverlay";

function App() {
  const [showMapGuide, setShowMapGuide] = useState(false);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden text-slate-900 selection:bg-amber-100">
      <CampusMapOverlay
        open={showMapGuide}
        onClose={() => setShowMapGuide(false)}
      />

      <div className="invite-gradient-bg" aria-hidden />

      <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:py-5">
        <div className="w-full max-w-md rounded-[1.75rem] border border-white/40 bg-white/95 p-6 shadow-2xl shadow-slate-900/20 backdrop-blur-sm sm:max-w-lg sm:rounded-3xl sm:p-8 lg:max-w-3xl lg:p-6 xl:max-w-4xl">
          <div className="mb-6 text-center sm:mb-10 lg:mb-4">
            <h1 className="mt-8 mb-5 font-serif text-5xl font-bold tracking-normal text-slate-900 [text-rendering:optimizeLegibility] sm:text-4xl">
              LỄ TỐT NGHIỆP
            </h1>
            <p className="text-2xl font-light italic text-slate-500">
              Vũ Văn Hậu
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-y border-stone-100 py-6 text-center sm:gap-8 sm:py-10 lg:grid-cols-2 lg:items-start lg:gap-10 lg:py-5 lg:text-left">
            <div className="text-center items-center justify-center">
              <p className="mb-2 text-[0.85rem] uppercase tracking-[0.2em] text-stone-400 ">
                Thời gian
              </p>
              <p className="text-lg font-medium sm:text-lg">
                10:00 AM — Thứ Bảy
              </p>
              <p className="font-serif text-xl font-bold text-slate-800 sm:text-2xl">
                23 . 05 . 2026
              </p>
            </div>

            <div className="text-center" >
              <p className="mb-2 text-[0.85rem] uppercase tracking-[0.2em] text-stone-400">
                Địa điểm
              </p>
              <p className="text-lg font-medium sm:text-lg">Hội trường A2</p>
              <p className="text-lg text-slate-600 sm:text-base">
                Học viện Công nghệ <br className="lg:hidden" />
                Bưu chính Viễn thông
              </p>
            </div>
          </div>
        
          <div className="mt-6 sm:mt-10 lg:mt-5">

            <button
              type="button"
              onClick={() => setShowMapGuide(true)}
              className="group relative w-full overflow-hidden rounded-2xl bg-slate-900 px-6 py-4 text-white transition-all hover:bg-slate-800 active:scale-[0.98] sm:px-8 sm:py-5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                Hướng dẫn di chuyển
              </span>
            </button>
          </div>
        </div>
      </main>

      <footer className="relative z-10 shrink-0 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 text-center text-[0.65rem] uppercase tracking-widest text-white/75">
        2026
      </footer>
    </div>
  );
}

export default App;

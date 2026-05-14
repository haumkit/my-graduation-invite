import "./App.css";
import { useState } from "react";

function App() {
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden text-slate-900 selection:bg-amber-100">
      {/* Lớp gradient phủ toàn màn — phóng to để không lộ viền khi animate */}
      <div className="invite-gradient-bg" aria-hidden />

      <main className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-10 lg:py-5">
        <div className="w-full max-w-md rounded-[1.75rem] border border-white/40 bg-white/95 p-6 shadow-2xl shadow-slate-900/20 backdrop-blur-sm sm:max-w-lg sm:rounded-3xl sm:p-8 lg:max-w-3xl lg:p-6 xl:max-w-4xl">
          <div className="mb-6 text-center sm:mb-10 lg:mb-4">
            <h1 className="mb-2 font-serif text-3xl font-bold tracking-normal text-slate-900 [text-rendering:optimizeLegibility] sm:text-4xl">
              LỄ TỐT NGHIỆP
            </h1>
            <p className="text-xl font-light italic text-slate-500">
              Vũ Văn Hậu
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-y border-stone-100 py-8 text-center sm:gap-8 sm:py-10 lg:grid-cols-2 lg:items-start lg:gap-10 lg:py-5 lg:text-left">
            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-stone-400">
                Thời gian
              </p>
              <p className="text-base font-medium sm:text-lg">
                10:00 AM — Thứ Bảy
              </p>
              <p className="font-serif text-xl font-bold text-slate-800 sm:text-2xl">
                23 . 05 . 2026
              </p>
            </div>

            <div>
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.2em] text-stone-400">
                Địa điểm
              </p>
              <p className="text-base font-medium sm:text-lg">Hội trường A2</p>
              <p className="text-sm text-slate-600 sm:text-base">
                Học viện Công nghệ Bưu chính Viễn thông
              </p>
            </div>
          </div>

          <div className="mt-6 sm:mt-10 lg:mt-5">

            <button
              type="button"
              onClick={() => setShowLocation(!showLocation)}
              className="group relative w-full overflow-hidden rounded-2xl bg-slate-900 px-6 py-4 text-white transition-all hover:bg-slate-800 active:scale-[0.98] sm:px-8 sm:py-5"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                {showLocation ? "Đóng hướng dẫn" : "Hướng dẫn di chuyển"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showLocation
                  ? "mt-6 max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="rounded-2xl border border-dashed border-stone-200 bg-stone-50 p-4 sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-800">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-xs">
                    P
                  </span>
                  Hướng dẫn gửi xe & Di chuyển
                </h3>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="rounded-lg bg-white p-3 shadow-sm">
                    <p className="font-semibold text-slate-800">
                      🚗 Gửi xe ô tô/xe máy:
                    </p>
                    <p>Đang cập nhật sơ đồ bãi gửi xe...</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 shadow-sm">
                    <p className="font-semibold text-slate-800">
                      🚶 Cách đi vào hội trường:
                    </p>
                    <p>
                      Từ cổng chính đi thẳng 100m, rẽ trái tại tòa nhà A1...
                    </p>
                  </div>
                  <div className="mt-4 flex aspect-video w-full items-center justify-center rounded-lg bg-stone-200 italic text-stone-400">
                    [Google Maps Iframe sẽ đặt ở đây]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 shrink-0 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 text-center text-[0.65rem] uppercase tracking-widest text-white/75">
        Design by Van Hau • 2026
      </footer>
    </div>
  );
}

export default App;

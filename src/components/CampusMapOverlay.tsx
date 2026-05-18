import { useEffect, useState } from "react";

const GUIDE_GIF = "/dichuyen.gif";
const ROTATE_HINT_MS = 3000;

function isMobilePortrait(): boolean {
  return (
    window.matchMedia("(max-width: 767px)").matches &&
    window.matchMedia("(orientation: portrait)").matches
  );
}

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CampusMapOverlay({ open, onClose }: Props) {
  const [showRotateHint, setShowRotateHint] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setShowRotateHint(false);
      return;
    }

    if (!isMobilePortrait()) return;

    setShowRotateHint(true);
    const timer = window.setTimeout(() => setShowRotateHint(false), ROTATE_HINT_MS);

    const onOrientationChange = () => {
      if (!window.matchMedia("(orientation: portrait)").matches) {
        setShowRotateHint(false);
      }
    };
    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-[200] transition-[opacity,visibility] duration-300 ease-out ${
        open
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-label="Hướng dẫn di chuyển"
    >
      <div
        className="absolute inset-0 cursor-pointer bg-slate-900/35 backdrop-blur-md backdrop-saturate-150"
        aria-hidden
        onClick={onClose}
      />

      <div
        className={`pointer-events-none fixed inset-0 z-[220] flex flex-col items-center justify-center gap-4 bg-slate-900/80 px-8 text-center transition-opacity duration-500 md:hidden ${
          showRotateHint ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!showRotateHint}
      >
        <div className="rotate-phone-icon rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
          <svg
            className="h-14 w-14 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <circle cx="12" cy="18" r="0.75" fill="currentColor" stroke="none" />
            <path
              d="M16 6a4 4 0 1 1-8 0"
              strokeLinecap="round"
              strokeDasharray="2 3"
            />
          </svg>
        </div>
        <p className="max-w-[16rem] text-2xl font-medium leading-snug text-white">
          Xoay ngang màn hình để xem bản đồ rõ hơn
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-2 sm:p-6 max-md:portrait:p-0 max-md:landscape:p-1">
        <div
          className={`pointer-events-auto w-fit transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-[0.96] opacity-0"
          }`}
        >
          <div className="map-mobile-landscape relative w-fit max-w-[min(92vw,950px)] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 max-md:landscape:max-w-[98vw]">
            <img
              src={GUIDE_GIF}
              alt="Hướng dẫn di chuyển đến hội trường"
              className="map-mobile-landscape-img block h-auto w-auto max-h-[88dvh] max-w-[min(92vw,950px)] object-contain max-md:landscape:max-h-[92dvh] max-md:landscape:max-w-[98vw]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

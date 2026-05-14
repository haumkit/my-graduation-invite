import { useEffect } from "react";

const MAP_SRC = "/ptit-map.jpg";

const POINTS = {
  parking: { x: 20, y: 65 },
  road: { x: 32, y: 93 },
  hall: { x: 45, y: 30 },
} as const;

type Props = {
  open: boolean;
  onClose: () => void;
};

export function CampusMapOverlay({ open, onClose }: Props) {
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
      aria-label="Bản đồ hướng dẫn di chuyển"
    >
      {/* Chạm nền mờ → đóng */}
      <div
        className="absolute inset-0 cursor-pointer bg-slate-900/35 backdrop-blur-md backdrop-saturate-150"
        aria-hidden
        onClick={onClose}
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center p-3 sm:p-6">
        <div
          className={`pointer-events-auto relative w-full max-w-[min(92vw,950px)] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-[0.96] opacity-0"
          }`}
        >
          <img
            src={MAP_SRC}
            alt="Bản đồ khu vực"
            className="mx-auto block h-auto max-h-[88dvh] w-full object-contain"
            draggable={false}
          />

          <svg
            className="campus-map-svg pointer-events-none absolute left-0 top-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
           

            <g filter="url(#campus-point-glow)">
              <circle
                cx={POINTS.parking.x}
                cy={POINTS.parking.y}
                r={3}
                fill="#FF0000"
                stroke="#fff"
                strokeWidth={0.45}
              />
              <circle
                cx={POINTS.road.x}
                cy={POINTS.road.y}
                r={3}
                fill="#FF0000"
                stroke="#fff"
                strokeWidth={0.45}
              />
              <circle
                cx={POINTS.hall.x}
                cy={POINTS.hall.y}
                r={3}
                fill="#FF0000"
                stroke="#fff"
                strokeWidth={0.45}
              />
            </g>

          </svg>
        </div>
      </div>
    </div>
  );
}

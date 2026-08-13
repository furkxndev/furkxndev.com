/** Sayfanın arkasındaki dekoratif katman: ızgara, yumuşak ışık lekeleri ve film greni. */
export default function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-ink-950" />
      <div className="bg-grid absolute inset-0" />
      <div className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px] animate-float" />
      <div
        className="absolute -right-32 top-1/3 size-[34rem] rounded-full bg-accent-2/14 blur-[130px] animate-float"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute -left-40 bottom-0 size-[30rem] rounded-full bg-violet-500/12 blur-[140px] animate-float"
        style={{ animationDelay: "-7s" }}
      />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}

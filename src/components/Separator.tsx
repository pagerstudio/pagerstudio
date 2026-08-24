export default function Separator({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`relative w-full max-w-[720px] mx-auto h-[20px] overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.12) 4px, rgba(0,0,0,0.12) 5px)",
        }}
      />
    </div>
  );
}

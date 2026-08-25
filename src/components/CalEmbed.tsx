"use client";

export default function CalEmbed() {
  return (
    <iframe
      src="https://app.cal.com/pagerstudio/30min?layout=month_view&theme=light"
      className="w-full h-[750px] max-md:h-[850px] border-0 rounded-2xl"
      loading="eager"
      title="Book a Discovery Call"
    />
  );
}

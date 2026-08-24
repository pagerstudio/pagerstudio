export default function BlogLoading() {
  return (
    <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
      <div className="mx-auto max-w-2xl">
        <div className="h-8 w-32 bg-fill-hover rounded animate-pulse" />
        <div className="mt-4 h-12 w-3/4 bg-fill-hover rounded animate-pulse" />
        <div className="mt-4 h-4 w-1/2 bg-fill-hover rounded animate-pulse" />
        <div className="mt-10 space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-fill-hover rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

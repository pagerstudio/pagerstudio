export default function BlogPostLoading() {
  return (
    <section className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[60px] md:pb-24">
      <div className="mx-auto max-w-2xl">
        <div className="h-4 w-24 bg-fill-hover rounded animate-pulse" />
        <div className="mt-4 h-4 w-48 bg-fill-hover rounded animate-pulse" />
        <div className="mt-6 h-14 w-full bg-fill-hover rounded animate-pulse" />
        <div className="mt-4 h-4 w-36 bg-fill-hover rounded animate-pulse" />
        <div className="mt-10 space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-full bg-fill-hover rounded animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function YouTubeHero() {
  return (
    <section className="w-full -mt-[96px] pt-[96px]">
      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/41SbYR-r4Us?autoplay=1&mute=1&modestbranding=1&controls=1"
          title="SMK N 1 Kawunganten"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

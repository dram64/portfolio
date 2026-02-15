"use client"

export function CharacterSlider() {
  return (
    <section className="flex flex-col w-full bg-[#111111]">
      {/* Main slide area - white card on dark bg */}
      <div className="relative w-full">
        {/* WhiteBigTile as the card frame */}
        <div className="relative mx-auto w-full max-w-[1200px]">
          <img
            src="/WhiteBigTile.webp"
            alt=""
            className="w-full h-auto"
            aria-hidden="true"
          />

          {/* Slide content layered on top of the white card */}
          <div className="absolute inset-[3%] overflow-hidden">
            {/* Layer 1: NSOBG background */}
            <img
              src="/NSOBG.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden="true"
            />

            {/* Layer 2: NSOTitleBg - large faded text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="/NSOTitleBg.webp"
                alt=""
                className="w-[95%] h-auto opacity-70 select-none"
              />
            </div>

            {/* Layer 3: Characters */}
            <div className="absolute inset-0 flex items-end justify-between px-[2%]">
              {/* Ame - left */}
              <div className="relative w-[45%] flex-shrink-0">
                <img
                  src="/Ame.webp"
                  alt="Ame from Needy Streamer Overload"
                  className="w-full h-auto object-contain"
                />
                <span className="absolute bottom-[8%] left-[15%] font-serif text-[clamp(1.5rem,4vw,5rem)] font-light tracking-wider text-[#b8a8b8]/40 italic select-none pointer-events-none">
                  Ame
                </span>
              </div>

              {/* KAngel - right */}
              <div className="relative w-[50%] flex-shrink-0">
                <img
                  src="/KAngel.webp"
                  alt="KAngel from Needy Streamer Overload"
                  className="w-full h-auto object-contain"
                />
                <span className="absolute bottom-[8%] right-[5%] whitespace-nowrap font-serif text-[clamp(1.5rem,4vw,5rem)] font-light tracking-wider text-[#e8a8c8]/40 italic select-none pointer-events-none">
                  KAngel
                </span>
              </div>
            </div>

            {/* Layer 4: NSOWhiteHaze at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
              <img
                src="/NSOWhiteHaze.webp"
                alt=""
                className="w-full h-auto"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip at bottom */}
      <div className="flex items-center justify-center gap-2 bg-[#111111] px-4 py-3 overflow-x-auto hide-scrollbar">
        <button className="relative flex-shrink-0 h-14 w-24 overflow-hidden rounded-md ring-2 ring-[#e8a8c8] transition-opacity">
          <img
            src="/NSOTile.webp"
            alt="Needy Streamer Overload"
            className="h-full w-full object-cover"
          />
        </button>
        {/* Placeholder tiles for future slides */}
        {Array.from({ length: 8 }).map((_, i) => (
          <button
            key={i}
            className="relative flex-shrink-0 h-14 w-24 overflow-hidden rounded-md opacity-50 transition-opacity hover:opacity-80"
          >
            <img
              src="/Tile2.webp"
              alt={`Slide ${i + 2}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  )
}

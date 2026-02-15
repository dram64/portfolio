"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"

const DESIGN_WIDTH = 1440

function ScrollReveal({ children, direction = "up", delay = 0, className, style: extraStyle }: { children: ReactNode; direction?: "up" | "down" | "left" | "right"; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const translateMap = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(40px)",
    right: "translateX(-40px)",
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...extraStyle,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : translateMap[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

const slides = [
  { id: 0, bg: "/NSOBG.webp", title: "/NSOTitleBg.webp", titleStyle: { width: "95%", maxWidth: "1300px", top: "45%" }, overlay: null, left: "/Ame.webp", right: "/KAngel.webp", leftName: null, rightName: null, leftNameText: "Ame", rightNameText: "KAngel", leftNameTextStyle: { left: "8%", bottom: "8%", fontSize: "120px", color: "#000000" }, rightNameTextStyle: { right: "8%", bottom: "8%", fontSize: "120px", color: "#FFC2F2" }, leftStyle: { left: "3%", bottom: "-90%", width: "50%", filter: "drop-shadow(-4px 6px 6px rgba(0,0,0,0.3))" }, rightStyle: { right: "1%", bottom: "-90%", width: "52%", filter: "drop-shadow(-4px 6px 6px rgba(0,0,0,0.3))" }, haze: "/NSOWhiteHaze.webp", tile: "/NSOTrapTile.webp", navLogo: "/TZLogoNavBarNSO.webp", navTextLogo: null, navTextColor: null, navLinkColor: "#ffffff", navGradient: "linear-gradient(to right, #f3bbe7, #aadcff)", navFrills: null },
  { id: 1, bg: "/AyakaBaseballBlueStripesBG.webp", title: null, overlay: "/AyakaBaseballWhiteBG.webp", left: "/AyakaJerseyTear.webp", right: "/AyakaNoBG.webm", leftName: "/AyakaNameTitle.webp", rightName: null, haze: null, tile: "/AyakaTrapTile.webp", navLogo: "/TZLogoNavBar.webp", navTextLogo: null, navTextColor: null, navLinkColor: "#ffffff", navGradient: "linear-gradient(to right, #005a9c, #005a9c)", navFrills: null, navShadow: "0 4px 12px rgba(0,0,0,0.3)", leftStyle: { left: "10%", top: "55%", width: "28%", transform: "rotate(-30deg)" }, rightStyle: { right: "5%", bottom: "-85%", width: "68%" }, leftNameStyle: { left: "1%", top: "10%", width: "35%" } },
  // { id: 2, bg: "/AliceYuzuhaBackground.webp", title: null, overlay: "/TearForAliceYuzuhaBG.webp", left: "/AliceSwimsuit.webp", right: "/YuzuhaSwimsuit.webp", leftName: "/AliceName.webp", rightName: "/YuzuhaName.webp", haze: null, tile: "/NSOTrapTile.webp", navLogo: "/TZLogoNavBar.webp", navTextLogo: null, navTextColor: null, navLinkColor: "#ffffff", navGradient: "linear-gradient(to right, #f5d6a0, #f7e4c0)", navFrills: null, leftStyle: { left: "-5%", bottom: "-115%", width: "60%" }, rightStyle: { right: "-8%", bottom: "-88%", width: "62%" } },
  { id: 3, bg: "/NSOBG.webp", title: null, overlay: "/PinkDoubleHeartOpaque.webp", left: "/Panty.webp", right: "/Stocking.webp", leftName: "/PantyNameTag.webp", rightName: "/StockingNameTag.webp", haze: "null", tile: "/PSGTrapTile.webp", navLogo: null, navTextLogo: "TOKYO ZERO", navTextColor: "#ffffff", navLinkColor: "#ffffff", navGradient: "linear-gradient(to right, #fd7ac0, #fd7ac0)", navFrills: "/PinkFrills.webp", slideZIndex: 22, leftStyle: { left: "-3%", bottom: "-108%", width: "55%", zIndex: 21 }, rightStyle: { right: "-3%", bottom: "-95%", width: "55%", zIndex: 21 }, leftNameStyle: { left: "5%", top: "65%", width: "25%", zIndex: 23 }, rightNameStyle: { right: "3%", top: "63%", width: "28%", zIndex: 23 } },
  // { id: 4, bg: "/CipherBG.webp", title: null, overlay: null, left: null, right: "/CipherSplash.webp", leftName: "/CipherNameTitle.webp", rightName: null, haze: "/CipherGradient.webp", tile: "/CipherTrapTile.webp", navLogo: "/TZLogoNavBar.webp", navTextLogo: null, navTextColor: null, navLinkColor: "#ffffff", navGradient: "linear-gradient(to right, #2a2a3d, #4a4a6a)", navFrills: null },
  { id: 5, bg: "/FWMCOBG.webp", title: "/FuwaMocoNameTitle.webp", titleStyle: { top: "34%" }, overlay: null, left: "/FuwawaSplash.webp", right: "/MococoSplash.webp", leftName: null, rightName: null, haze: null, tile: "/FWMCOTrapTile.webp", navLogo: null, navTextLogo: "TOKYO ZERO", navTextColor: "#F9E5C9", navLinkColor: "#F9E5C9", navGradient: "linear-gradient(to right, #ffffff, #ffffff)", navFrills: "/CloudBorder.webp", navShadow: null, frillsShadow: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))", leftStyle: { left: "5%", bottom: "-125%", width: "50%" }, rightStyle: { right: "3%", bottom: "-115%", width: "45%" }, decorations: [
    { src: "/FMCOCloud.webp", style: { left: "5%", top: "15%", width: "22%" } },
    { src: "/FMCODonut.webp", style: { left: "25%", top: "45%", width: "14%" } },
    { src: "/FMCOPaw.webp", style: { left: "8%", top: "55%", width: "12%" } },
    { src: "/MCOCloud.webp", style: { right: "5%", top: "15%", width: "22%" } },
    { src: "/MCODonut.webp", style: { right: "25%", top: "45%", width: "14%" } },
    { src: "/MCOPaw.webp", style: { right: "8%", top: "55%", width: "12%" } },
  ] },
]

export default function Home() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(-1)
  const [scale, setScale] = useState(1)
  const mainRef = useRef<HTMLDivElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState("auto")
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent
    setIsIOS(/iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1))
  }, [])

  // Track previous slide for crossfade (only render active + prev)
  const changeSlide = (next: number) => {
    setPrev(active)
    setActive(next)
    // Clear prev after transition completes
    setTimeout(() => setPrev(-1), 1200)
  }

  useEffect(() => {
    function updateScale() {
      const s = window.innerWidth / DESIGN_WIDTH
      setScale(s)
      if (mainRef.current) {
        setWrapperHeight(`${mainRef.current.scrollHeight * s}px`)
      }
    }
    updateScale()
    window.addEventListener("resize", updateScale)
    const ro = new ResizeObserver(updateScale)
    if (mainRef.current) ro.observe(mainRef.current)
    return () => {
      window.removeEventListener("resize", updateScale)
      ro.disconnect()
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((active + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [active])

  return (
    <div
      style={{
        width: "100vw",
        height: wrapperHeight,
        overflow: "hidden",
        backgroundColor: "#ffffff",
      }}
    >
      <main
        ref={mainRef}
        style={{
          width: `${DESIGN_WIDTH}px`,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
      {/* Carousel section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 8",
          overflow: "hidden",
          backgroundColor: "#000000",
        }}
      >
        {/* Gradient navbar - crossfade layer */}
        <div style={{ position: "relative", zIndex: 24, height: "72px", width: "100%" }}>
          {slides.map((slide, i) => (
            <div
              key={`nav-${slide.id}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: slide.navGradient,
                boxShadow: slide.navShadow || "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "14px",
                paddingRight: "14px",
                opacity: active === i ? 1 : 0,
                transition: "opacity 0.7s ease",
                pointerEvents: active === i ? "auto" : "none",
              }}
            >
              {/* Logo on the left */}
              {slide.navTextLogo ? (
                <span
                  style={{
                    position: "absolute",
                    left: "14px",
                    fontFamily: "'Allotrope', sans-serif",
                    fontWeight: 900,
                    fontStyle: "italic",
                    fontSize: "40px",
                    color: slide.navTextColor || "#ffffff",
                    letterSpacing: "3px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {slide.navTextLogo}
                </span>
              ) : slide.navLogo ? (
                <img
                  src={slide.navLogo}
                  alt="Tokyo Zero"
                  style={{
                    position: "absolute",
                    left: "14px",
                    height: "46px",
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              ) : null}

              {/* Nav links centered */}
              <nav style={{ display: "flex", gap: "28px" }}>
                {[
                  { label: "Home", href: "#home" },
                  { label: "Designs", href: "https://desiram.myportfolio.com/" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    style={{
                      fontFamily: "'Things', sans-serif",
                      fontSize: "22px",
                      whiteSpace: "nowrap",
                      color: slide.navLinkColor || "#ffffff",
                      textDecoration: "none",
                      letterSpacing: "1px",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Nav frills decoration - crossfade layer */}
        {slides.map((slide, i) =>
          slide.navFrills ? (
            <img
              key={`frills-${slide.id}`}
              src={slide.navFrills}
              alt=""
              style={{
                position: "absolute",
                top: "52px",
                left: "-2%",
                width: "104%",
                height: "auto",
                zIndex: 2,
                filter: slide.frillsShadow || "none",
                pointerEvents: "none",
                opacity: active === i ? 1 : 0,
                transition: "opacity 0.7s ease",
              }}
            />
          ) : null
        )}

        {/* Background crossfade layer - always mounted, handles smooth transitions */}
        {slides.map((slide, i) => (
          <img
            key={`bg-${slide.id}`}
            src={slide.bg}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: active === i ? 1 : 0,
              transition: "opacity 0.7s ease",
              zIndex: 0,
            }}
          />
        ))}

        {/* Slides - only render active + previous for transition */}
        {slides.map((slide, i) => {
          const isActive = active === i
          const isPrev = prev === i
          // Only mount active and transitioning-out slide
          if (!isActive && !isPrev) return null
          return (
            <div
              key={slide.id}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: isActive ? (slide.slideZIndex ?? 1) : 0,
                pointerEvents: isActive ? "auto" : "none",
                overflow: "hidden",
              }}
            >
              {/* Title BG text */}
              {slide.title && (
                <img
                  src={slide.title}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: slide.titleStyle?.width ?? "85%",
                    maxWidth: slide.titleStyle?.maxWidth ?? "1100px",
                    top: slide.titleStyle?.top ?? "50%",
                    objectFit: "contain",
                    zIndex: 1,
                    animation: isActive ? "fadeSlideInTitle 0.7s ease-out 0.15s both" : isPrev ? "fadeSlideOutTitle 0.5s ease-in both" : "none",
                  }}
                />
              )}

              {/* Overlay (tear effect etc.) */}
              {slide.overlay && (
                <img
                  src={slide.overlay}
                  alt=""
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 2,
                    animation: isActive ? "fadeBgIn 0.6s ease-out 0.1s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                />
              )}

              {/* Decorative elements (above bg, under characters & title) */}
              {slide.decorations?.map((dec: any, di: number) => (
                <img
                  key={`dec-${di}`}
                  src={dec.src}
                  alt=""
                  style={{
                    position: "absolute",
                    ...dec.style,
                    height: "auto",
                    objectFit: "contain",
                    zIndex: 0,
                    pointerEvents: "none",
                    animation: isActive ? `fadeSlideIn 0.7s ease-out ${0.1 + di * 0.1}s both, wiggle 0.6s ease-in-out ${0.8 + di * 0.1}s both` : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                />
              ))}

              {/* Left character */}
              {slide.left && (
                <img
                  src={slide.left}
                  alt=""
                  style={{
                    position: "absolute",
                    left: slide.leftStyle?.left ?? "5%",
                    ...(slide.leftStyle?.top ? { top: slide.leftStyle.top } : { bottom: slide.leftStyle?.bottom ?? "-74%" }),
                    width: slide.leftStyle?.width ?? "43%",
                    height: "auto",
                    objectFit: "contain",
                    zIndex: slide.leftStyle?.zIndex ?? 5,
                    transform: slide.leftStyle?.transform ?? undefined,
                    filter: slide.leftStyle?.filter ?? undefined,
                    animation: isActive ? "fadeSlideIn 0.7s ease-out 0.2s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                />
              )}

              {/* Left character name (text) */}
              {slide.leftNameText && (
                <span
                  style={{
                    position: "absolute",
                    left: slide.leftNameTextStyle?.left ?? "5%",
                    bottom: slide.leftNameTextStyle?.bottom ?? "20%",
                    fontFamily: "'Things', serif",
                    fontSize: slide.leftNameTextStyle?.fontSize ?? "100px",
                    color: slide.leftNameTextStyle?.color ?? "rgba(200,180,220,0.4)",
                    zIndex: 3,
                    pointerEvents: "none",
                    animation: isActive ? "fadeSlideIn 0.7s ease-out 0.2s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                >
                  {slide.leftNameText}
                </span>
              )}

              {/* Left character name (image) */}
              {slide.leftName && (
                <img
                  src={slide.leftName}
                  alt=""
                  style={{
                    position: "absolute",
                    left: slide.leftNameStyle?.left ?? "3%",
                    top: slide.leftNameStyle?.top ?? "12%",
                    width: slide.leftNameStyle?.width ?? "20%",
                    height: "auto",
                    objectFit: "contain",
                    zIndex: slide.leftNameStyle?.zIndex ?? 6,
                    animation: isActive ? "fadeSlideIn 0.7s ease-out 0.3s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                />
              )}

              {/* Right character */}
              {slide.right && (
                slide.right.endsWith(".webm") && !isIOS ? (
                  <video
                    src={slide.right}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      position: "absolute",
                      right: slide.rightStyle?.right ?? "3%",
                      bottom: slide.rightStyle?.bottom ?? "-74%",
                      width: slide.rightStyle?.width ?? "45%",
                      height: "auto",
                      objectFit: "contain",
                      zIndex: slide.rightStyle?.zIndex ?? 5,
                      animation: isActive ? "fadeSlideIn 0.7s ease-out 0.25s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                    }}
                  />
                ) : (
                  <img
                    src={slide.right.endsWith(".webm") && isIOS ? "/AyakaSplash.webp" : slide.right}
                    alt=""
                    style={{
                      position: "absolute",
                      right: slide.rightStyle?.right ?? "3%",
                      bottom: slide.rightStyle?.bottom ?? "-74%",
                      width: slide.rightStyle?.width ?? "45%",
                      height: "auto",
                      objectFit: "contain",
                      zIndex: slide.rightStyle?.zIndex ?? 5,
                      filter: slide.rightStyle?.filter ?? undefined,
                      animation: isActive ? "fadeSlideIn 0.7s ease-out 0.25s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                    }}
                  />
                )
              )}

              {/* Right character name (text) */}
              {slide.rightNameText && (
                <span
                  style={{
                    position: "absolute",
                    right: slide.rightNameTextStyle?.right ?? "5%",
                    bottom: slide.rightNameTextStyle?.bottom ?? "20%",
                    fontFamily: "'Things', serif",
                    fontSize: slide.rightNameTextStyle?.fontSize ?? "100px",
                    color: slide.rightNameTextStyle?.color ?? "rgba(230,160,190,0.4)",
                    zIndex: 3,
                    pointerEvents: "none",
                    animation: isActive ? "fadeSlideIn 0.7s ease-out 0.3s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                >
                  {slide.rightNameText}
                </span>
              )}

              {/* Right character name (image) */}
              {slide.rightName && (
                <img
                  src={slide.rightName}
                  alt=""
                  style={{
                    position: "absolute",
                    right: slide.rightNameStyle?.right ?? "3%",
                    top: slide.rightNameStyle?.top ?? "12%",
                    width: slide.rightNameStyle?.width ?? "20%",
                    height: "auto",
                    objectFit: "contain",
                    zIndex: slide.rightNameStyle?.zIndex ?? 6,
                    animation: isActive ? "fadeSlideIn 0.7s ease-out 0.35s both" : isPrev ? "fadeSlideOut 0.5s ease-in both" : "none",
                  }}
                />
              )}

              {/* Haze at bottom */}
              {slide.haze && slide.haze !== "null" && (
                <img
                  src={slide.haze}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "30%",
                    objectFit: "cover",
                    objectPosition: "bottom",
                    zIndex: 8,
                  }}
                />
              )}
            </div>
          )
        })}

        {/* Tile slider strip - inside carousel at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            padding: "7px 14px",
            zIndex: 25,
            overflow: "hidden",
          }}
        >
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => changeSlide(i)}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                flexShrink: 0,
                height: "60px",
                opacity: active === i ? 1 : 0.55,
                transition: "opacity 0.4s ease, transform 0.3s ease",
                transform: active === i ? "scale(1.08)" : "scale(1)",
                animation: `slideUpTile 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${i * 0.08}s both`,
              }}
            >
              <img
                src={slide.tile}
                alt=""
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  filter: active === i ? "brightness(1.1)" : "brightness(0.9)",
                  transform: active === i ? "translateY(-3px)" : "translateY(0)",
                  transition: "filter 0.4s ease, transform 0.4s ease",
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* SHOP NOW bar */}
      <a
        href="https://tokyozero.myshopify.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          height: "86px",
          width: "100%",
          marginTop: "-8px",
          background: "linear-gradient(to right, #f3bbe7, #aadcff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 30,
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="shop-now-text"
          style={{
            fontFamily: "'Allotrope', sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: "64px",
            color: "#ffffff",
            letterSpacing: "8px",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 31,
            transition: "color 0.3s ease",
          }}
        >
          SHOP NOW
        </span>
      </a>

      {/* Section 2 */}
      <section style={{ position: "relative", width: "100%", overflow: "hidden", contentVisibility: "auto" as any, containIntrinsicSize: "auto 800px" }}>
        {/* Section2BG as sizing + background */}
        <img
          src="/Section2BG.webp"
          alt=""
          loading="lazy"
          style={{
            width: "100%",
            display: "block",
          }}
        />

        {/* Asset 1 - white card panel */}
        <ScrollReveal
          direction="right"
          delay={0}
          style={{
            position: "absolute",
            top: "12%",
            left: "6%",
            width: "88%",
            height: "auto",
            zIndex: 1,
          }}
        >
          <img
            src="/Asset 1.png"
            alt=""
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </ScrollReveal>

        {/* NSOTile - top left, slightly rotated */}
        <ScrollReveal
          direction="right"
          delay={0.15}
          style={{
            position: "absolute",
            top: "4%",
            left: "8%",
            width: "38%",
            zIndex: 3,
          }}
        >
          <img
            src="/NSOTile.webp"
            alt="Needy Streamer Overload"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              "--base-rotate": "-2deg",
              animation: "wiggleLoop 4s ease-in-out 1s infinite",
            } as any}
          />
        </ScrollReveal>

        {/* AyakaTile - top right, slightly rotated */}
        <ScrollReveal
          direction="right"
          delay={0.3}
          style={{
            position: "absolute",
            top: "-6%",
            right: "8%",
            width: "38%",
            zIndex: 2,
          }}
        >
          <img
            src="/AyakaTile.webp"
            alt="Kamisato Ayaka"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              "--base-rotate": "1.5deg",
              animation: "wiggleLoop 4.5s ease-in-out 1.5s infinite",
            } as any}
          />
        </ScrollReveal>

        {/* PSGTile - center bottom, overlapping both */}
        <ScrollReveal
          direction="right"
          delay={0.45}
          style={{
            position: "absolute",
            bottom: "4%",
            left: "29%",
            width: "42%",
            zIndex: 4,
          }}
        >
          <img
            src="/PSGTile.webp"
            alt="Panty and Stocking"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              "--base-rotate": "1deg",
              animation: "wiggleLoop 5s ease-in-out 2s infinite",
            } as any}
          />
        </ScrollReveal>
      </section>

      {/* Contact section */}
      <section
        id="contact"
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#ffffff",
          contentVisibility: "auto" as any,
          containIntrinsicSize: "auto 500px",
        }}
      >
        {/* CONTACT gradient header */}
        <div
          style={{
            width: "100%",
          height: "86px",
            background: "linear-gradient(to right, #7ee8fa, #80d0f0)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'Allotrope', sans-serif",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: "64px",
              color: "#ffffff",
              letterSpacing: "8px",
              textTransform: "uppercase",
            }}
          >
            CONTACT
          </span>
        </div>

        {/* Contact body */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            style={{
              padding: "72px 60px",
              textAlign: "center",
              fontFamily: "'Things', sans-serif",
              color: "#333333",
              fontSize: "20px",
              lineHeight: 1.8,
            }}
          >
            <p style={{ margin: 0 }}>
              Interested in working in UI/UX Design, Product Design,
              <br />
              Front End or Full Stack Development, Marketing managament or similar roles.
              <br />
              Experience in industry standard programs such as Adobe Creative Cloud Programs (Photoshop, Illustrator, After Effects, etc),
              <br />
              Figma, Marketing, Web Development, Framer,
              <br />
              Next.js, TypeScript, Tailwind CSS, React, Vue.
              <br />
              Email me at
              <br />
              <a
                href="mailto:desiramirez62200@gmail.com"
                style={{
                  color: "#333333",
                  textDecoration: "none",
                }}
              >
                desiramirez62200@gmail.com
              </a>
              <br />
              Website designed and application done by me through Figma, React, and TypeScript.
              <br />
              <br />
              Artworks personally commissioned in collaboration with various artists.
              <br />
            </p>
          </div>
        </ScrollReveal>

        {/* TZ logo at bottom */}
        <ScrollReveal direction="up" delay={0.25}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "43px",
            }}
          >
            <img
              src="/T0LogoBlue.webp"
              alt="Tokyo Zero"
              style={{
                height: "43px",
                width: "auto",
                objectFit: "contain",
                opacity: 0.6,
              }}
            />
          </div>
        </ScrollReveal>
      </section>
      </main>
    </div>
  )
}

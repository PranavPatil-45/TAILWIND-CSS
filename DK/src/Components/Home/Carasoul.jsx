import React, { useEffect, useRef, useState } from "react";

export default function Carasoul({
  images = [],
  interval = 2000,
  className = "",
}) {
  const safeImages = images.length ? images : [
    { src: "https://videos.openai.com/az/vg-assets/task_01kae09svxfa6rrd2cvwwjfev3%2F1763554280_img_0.webp?se=2025-11-25T12%3A16%3A02Z&sp=r&sv=2024-08-04&sr=b&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-19T01%3A48%3A57Z&ske=2025-11-26T01%3A53%3A57Z&sks=b&skv=2024-08-04&sig=k/2hdPscIzoGXEG19hHqR%2BnmrDo98Jj0UNTZJw3PmII%3D&ac=oaivgprodscus2", alt: "Placeholder 1" },
    { src: "https://videos.openai.com/az/vg-assets/task_01kabsr544fdc93nt4atcw73m2%2F1763480270_img_2.webp?se=2025-11-25T11%3A46%3A19Z&sp=r&sv=2024-08-04&sr=b&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-19T01%3A48%3A57Z&ske=2025-11-26T01%3A53%3A57Z&sks=b&skv=2024-08-04&sig=HrCPZ8dH2Y8wKb5/eRP3X8RRqOJdj0KurjsZcDpzJHc%3D&ac=oaivgprodscus2", alt: "Placeholder 2" },
    { src: "https://videos.openai.com/az/vg-assets/task_01kabsfjw7fz69p1y8cs5vmq0q%2F1763480046_img_0.webp?se=2025-11-25T11%3A46%3A19Z&sp=r&sv=2024-08-04&sr=b&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-19T01%3A48%3A57Z&ske=2025-11-26T01%3A53%3A57Z&sks=b&skv=2024-08-04&sig=eNUWS3Q6XmBHQSXNkD/HFtyaMo8Vhd/GMmjOIR%2BmqP4%3D&ac=oaivgprodscus2", alt: "Placeholder 3" },
    { src: "https://videos.openai.com/az/vg-assets/task_01kagk3033epgse60j333emzp4%2F1763641074_img_1.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=0L3PegBO4ZXE%2BARP%2BKv61%2B6AmQJ0mQqmaVeGIooLcP4%3D&ac=oaivgprodscus2" },
    { src: "https://videos.openai.com/az/vg-assets/task_01kagk3033epgse60j333emzp4%2F1763641074_img_0.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=TgxT4o%2B0Jxz6TC9Rly5OXsDRG8euNQr/SBqMaUUlN4U%3D&ac=oaivgprodscus2" },
    { src: "https://videos.openai.com/az/vg-assets/task_01kagkav42fne99w1e4cwb9ggv%2F1763641324_img_1.webp?se=2025-11-26T00%3A00%3A00Z&sp=r&sv=2024-08-04&sr=b&skoid=cfbc986b-d2bc-4088-8b71-4f962129715b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-11-20T01%3A09%3A13Z&ske=2025-11-27T01%3A14%3A13Z&sks=b&skv=2024-08-04&sig=2lo3/RQLiGQfKgyP/aBtr3Bxa7v/%2BNxNneTAavXEsCs%3D&ac=oaivgprodscus2" }
  ];

  const total = safeImages.length;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!playing || isHovering) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [playing, interval, total, isHovering]);


  return (
    <div
      ref={containerRef}
      className={`w-full mx-auto relative overflow-hidden bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl ${className}`}
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
      tabIndex={0}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] rounded-3xl overflow-hidden">
        {safeImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-out transform ${
              i === index 
                ? "opacity-100 z-20 scale-100" 
                : "opacity-0 z-10 pointer-events-none scale-105"
            }`}
            aria-hidden={i === index ? "false" : "true"}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            
            <img
              src={img.src}
              alt={img.alt || `Slide ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-10000 ease-linear hover:scale-110"
              style={{ height: "100%" }}
            />
          </div>
        ))}

        <button
          onClick={() => { prev(); setPlaying(false); }}
          aria-label="Previous slide"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-110 hover:-translate-x-1 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => { next(); setPlaying(false); }}
          aria-label="Next slide"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-110 hover:translate-x-1 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause autoplay" : "Play autoplay"}
          className="absolute right-6 bottom-24 z-30 bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300 transform hover:scale-110 group"
        >
          <div className="relative">
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 4h2v12H6V4zm6 0h2v12h-2V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
              </svg>
            )}
          </div>
        </button>

        <div className="absolute left-6 right-6 bottom-16 z-30 h-2 bg-white/20 rounded-full overflow-hidden hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{
              width: `${(1 + index) / total * 100}%`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>
          </div>
        </div>

        <div className="absolute left-6 bottom-6 z-30">
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl px-4 py-2">
            <span className="text-white font-semibold text-sm">
              {index + 1} / {total}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 flex gap-3">
        {safeImages.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); setPlaying(false); }}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative transition-all duration-500 ease-out transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full ${
              i === index 
                ? "w-8 bg-gradient-to-r from-blue-400 to-purple-500 scale-110 shadow-lg" 
                : "w-3 bg-white/40 hover:bg-white/60"
            } h-3`}
          >
            {i === index && (
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
            )}
          </button>
        ))}
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 top-8 z-30 bg-black/40 backdrop-blur-xl rounded-2xl px-6 py-3 transform transition-all duration-500 hover:scale-105">
        <span className="text-white font-semibold text-sm tracking-wider">
          🎯 Premium Dairy Products
        </span>
      </div>

      <div className={`absolute inset-0 z-25 bg-gradient-to-r from-transparent via-black/10 to-transparent transition-opacity duration-500 ${
        isHovering ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  )
}

const styles = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-shimmer {
  animation: shimmer 2s infinite;
}
`;


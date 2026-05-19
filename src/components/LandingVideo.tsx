export default function LandingVideo() {
  return (
    <section className="course-format-section" id="video">
      <div className="container">
        <h2>Jak wyglądają warsztaty w praktyce</h2>
        <p className="faq-intro">
          Krótki materiał pokazuje atmosferę pracy, skupienie uczestników i realne zadania wykonywane w małych grupach.
        </p>

        <div className="landing-video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="TakTrzeba - warsztaty praktyczne dla młodzieży"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="social-clips-grid" aria-label="Krótkie klipy z warsztatów">
          <iframe
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="Stolarka - szybki klip"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/2Vv-BfVoq4g"
            title="Mechanika rowerowa - szybki klip"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            src="https://www.youtube.com/embed/JGwWNGJdvx8"
            title="Elektryka i praca zespołowa - szybki klip"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

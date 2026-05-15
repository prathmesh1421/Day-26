import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  useEffect(() => {
    gsap.from(".stat-card", {
      scrollTrigger: {
        trigger: ".stats",
        start: "top 80%"
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2
    });
  }, []);

  return (
    <div className="stats">
      <div className="stat-card">👨‍⚕️ Doctors<br />52</div>
      <div className="stat-card">🧑 Patients<br />1200</div>
      <div className="stat-card">🛏 Beds<br />300</div>
      <div className="stat-card">🚑 Emergency<br />24/7</div>
    </div>
  );
}

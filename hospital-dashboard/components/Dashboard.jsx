import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      //  INTRO ANIMATION
      gsap.from(".card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        clearProps: "transform,opacity"
      });

      //  SCROLL ANIMATION (SAFE)
      gsap.from(".stats-card", {
        scrollTrigger: {
          trigger: ".stats",
          start: "top 85%",
          once: true
        },
        opacity: 0,
        y: 40,
        duration: 0.5,
        stagger: 0.15,
        clearProps: "transform,opacity"
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <h2>Dashboard Overview</h2>

      <div className="grid">
        <div className="card">👨‍⚕️ Doctors: 25</div>
        <div className="card">🧑 Patients: 50</div>
        <div className="card">🛏 Beds: 100</div>
        <div className="card">🚑 Emergency: Active</div>
      </div>

      <div className="stats">
        <h3>Hospital Stats</h3>

        <div className="stats-grid">
          <div className="stats-card">Surgeries: 50</div>
          <div className="stats-card">Recovered: 40</div>
          <div className="stats-card">ICU: 10</div>
        </div>
      </div>
    </div>
  );
}

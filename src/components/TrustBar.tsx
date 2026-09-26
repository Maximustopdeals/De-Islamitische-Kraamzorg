import { trustStats } from "@/lib/site";
import Reveal from "./Reveal";

export default function TrustBar() {
  return (
    <div className="trust">
      <div className="container trust__grid">
        {trustStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

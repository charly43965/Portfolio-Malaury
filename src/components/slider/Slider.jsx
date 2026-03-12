import "./slider.css";

export default function Slider() {
  return (
    <div id="animate">
      <div id="animate_right" className="slideout glass">
        <span>C</span>
      </div>
      <div id="animate_left" className="slideout glass">
        <span>M</span>
      </div>
    </div>
  );
}

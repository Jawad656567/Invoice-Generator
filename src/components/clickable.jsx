import { useState, useEffect } from "react";

function HomeCard() {
  const [text, setText] = useState(
    "Enter your shop or mall information here."
  );

  // ✅ Page load par localStorage se data restore karo
  useEffect(() => {
    const savedText = localStorage.getItem("homeCardText");
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleBlur = (e) => {
    const newText = e.target.innerText;
    setText(newText);
    localStorage.setItem("homeCardText", newText); // ✅ LocalStorage me save karo
  };

  return (
    <div className="home-illustration">
      <div className="dashboard-mockup">
        <div className="mockup-header">
          <div className="mockup-dot"></div>
          <div className="mockup-dot"></div>
          <div className="mockup-dot"></div>
        </div>

        <div className="mockup-content">
          <div className="invoice-preview">
            {/* ✅ LocalStorage integrated editable div */}
            <div
              className="home-card"
              contentEditable
              suppressContentEditableWarning={true}
              onBlur={handleBlur}
              style={{ border: "1px dashed gray", padding: "8px" }}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;

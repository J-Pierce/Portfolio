import { useState } from "react";

export default function Header() {
  const [isClicked, setIsClicked] = useState("");
  const items = [
    "About Me",
    "Education",
    "Work",
    "Skills",
    "Projects",
    "Contact",
  ];

  function handleSelect(event) {
    isClicked === event.target.id ? null : setIsClicked(event.target.id);
  }

  return (
    <header>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <button
                id={item}
                onClick={handleSelect}
                className={
                  isClicked === item ? "headerClicked" : "headerUnclicked"
                }
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

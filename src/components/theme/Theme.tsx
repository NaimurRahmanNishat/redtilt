import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const Theme = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
          return localStorage.getItem("theme") ?? "light";
        }
        return "light";
      });
    
      useEffect(() => {
        if (typeof window !== "undefined") {
          localStorage.setItem("theme", darkMode);
          const element = document.documentElement;
          if (darkMode === "dark") {
            element.classList.add("dark");
          } else {
            element.classList.remove("dark");
          }
        }
      }, [darkMode]);
  return (
    <div>
      {darkMode === "dark" ? (
        <BiSolidSun
          className="text-2xl cursor-pointer"
          onClick={() => setDarkMode("light")}
        />
      ) : (
        <BiSolidMoon
          className="text-2xl cursor-pointer"
          onClick={() => setDarkMode("dark")}
        />
      )}
    </div>
  );
};

export default Theme;
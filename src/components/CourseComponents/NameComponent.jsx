import { useEffect, useState } from "react";

export default function NameComponent({ data , setTitleColor}) {
    
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [divColor, setDivColor] = useState(getRandomColor());

  useEffect(() => {
    if (data.length > 0) {
      setDivColor(getRandomColor());
    }
  }, [data]);

  setTitleColor(divColor)

  return (
    <div
      className="NameComponent"
      style={{
        backgroundColor: divColor,
        '--hover-color': divColor,
      }}
    >
      <p>{data ? data.charAt(0) : ""}</p>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function NameComponentPersonal({ data, img }) {

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


  return (
    <>
      {img ? <img src={img} alt="" className="NameComponentPersonalImage" /> :
        <div
          className="NameComponentPersonal"
          style={{
            backgroundColor: divColor,
            '--hover-color-personal': divColor,
          }}
        >
          <p>{data ? data.charAt(0).toUpperCase() : ""}</p>
        </div>
      }
    </>
  );
}

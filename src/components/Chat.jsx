import { useState } from "react";

const courses = [
  { id: 1, name: "ReactJS là gì? tjai sao nên học reactJS?" },
  { id: 2, name: "SPA và MPA ?" },
  { id: 3, name: "Arrow function ?" },
];
export const Chat = () => {
  const [styled, setStyled] = useState(1);
  return (
    <>
      <ul>
        {courses.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => setStyled(item.id)}
              style={item.id === styled ? { color: "orangered" } : {}}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

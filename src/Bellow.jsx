import React from "react";
import Accordion from "./Accordion";

function Bellow() {
  const data = [
    {
      title: "Marvels",
      description: "Marvels are awesome",
    },
    {
      title: "Coke vs Pepsi",
      description: "Coke is better",
    },
    {
      title: "React vs Angular",
      description: "React is better",
    },
    {
      title: "Java vs Kotlin",
      description: "Kotlin is better",
    },
  ];

  const accordions = [];

  for (let i = 0; i < data.length; i++) {
    accordions.push(
      <Accordion
        key={crypto.randomUUID()}
        title={data[i].title}
        description={data[i].description}
        isOpen={i === 2}
      />
    );
  }

  console.log(accordions);

  return (
    <div className="border-2 border-zinc-600 rounded-lg">{accordions}</div>
  );
}

export default Bellow;

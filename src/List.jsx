import React from "react";
import Pets from "./Pets.jsx";

const List = ({ pets }) => {
  return (
    <section>
      {pets.map((pet) => {
        return <Pets key={pet.id} {...pet} />;
      })}
    </section>
  );
};

export default List;

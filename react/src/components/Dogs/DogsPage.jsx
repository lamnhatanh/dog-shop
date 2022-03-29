import React from "react";
import DogsCard from "./DogsCard";
import "./dogs.css"
function DogsPage(props) {
  const { allDogs } = props;
  return (
    <section className="dogs-container">
      {allDogs.map((dog, index) => {
        return (
          <div key={index}>
            <DogsCard
              name={dog.name}
              breed={dog.breed}
              description={dog.description}
              price={dog.price}
              imageUrl={dog.imageUrl}
            />
          </div>
        );
      })}
    </section>
  );
}

export default DogsPage;

import React from "react";
import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = (props) => {
  return (
    <div className="CardList">
      {props.monsters.map((currentElement) => (
        <Card key={currentElement.id} monster={currentElement} />
      ))}
    </div>
  );
};

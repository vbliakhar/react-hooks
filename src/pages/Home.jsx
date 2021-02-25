import React, { Fragment } from "react";
import { Card } from "../components/Card";
import { Search } from "../components/Search";
export const Home = () => {
  const cards = new Array(6).fill("");
  console.log(cards);
  return (
    <Fragment>
      <h1>Home</h1>
      <Search />
      <div className="row">
        {cards.map((_, card) => {
          return (
            <div className="col-sm-4 mb-4" key={card}>
              <Card />
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

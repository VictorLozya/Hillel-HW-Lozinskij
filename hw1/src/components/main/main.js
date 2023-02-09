import React, { Component } from "react";
import Nav from "../nav/nav";
import "./main.scss";
let url =
  "https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=h5thffQj";
class Main extends Component {
  render() {
    return (
      <div className={"container"}>
        <div className={"wrapper"}>
          <Nav />
          <section className={"section"}>
            <div className="section__img">
              <img src={url} alt="Kitty" />
            </div>
            <div className="section__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur dolores, doloribus esse fugit, harum in magnam modi
                neque nobis obcaecati perspiciatis possimus quis sunt.
                Accusantium aut consectetur delectus est harum iure iusto
                laboriosam maxime nam nesciunt, perferendis praesentium quas
                recusandae sapiente soluta tenetur, unde voluptatum. Accusamus
                at deserunt eius explicabo!
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";
import Style from "./MovieElement.module.scss"
export default class MovieElement extends Component {

  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render() {
    return (
      
        <div onMouseEnter={this.mouseEnter} className={"d-flex bg-light " + Style.container}>
          <img   width="185" alt="poster du film "src={this.props.movie.img}/>
          <div className="flex-fill d-flex flex-column p-3">
            <h5 className="">{this.props.movie.title}</h5>
            <hr className="w-100"/>
            <p>{this.props.movie.details}</p>
          </div>
        </div>
      
    );
  }
}

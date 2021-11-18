import React from "react";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="flex rounded overflow-hidden mb-4 md:w-5/12 w-11/12 mr-4">
        <div className="h-48 w-52 bg-gray-400 overflow-hidden">
          <img src={this.props.poster} alt="" className="w-full" />
        </div>
        <div className="bg-white w-5/6 flex p-5 items-end">
          <div>
            <p className="text-gray-600 font-bold mb-1">{this.props.title}</p>
            <div className="text-gray-600 text-xs flex ">
              <p className="mr-3">
                <span className="font-bold">Year:</span> {this.props.year}
              </p>
              <p>
                <span className="font-bold">Type:</span> {this.props.type}
              </p>
            </div>
            <Link to={{ pathname: `details/${this.props.id}` }}>
              <button className="bg-blue-500 text-white text-xs p-2 font-bold rounded mt-5">
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

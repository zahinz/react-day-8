import React from "react";
import { Link } from "react-router-dom";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="flex mb-4 md:w-6/12 w-11/12 px-2">
        <div className="h-48 rounded-l-md w-52 bg-gray-400 overflow-hidden flex justify-center items-center">
          {this.props.poster !== "N/A" ? (
            <img
              src={this.props.poster}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <p className="text-center text-gray-500">Thumbnail not available</p>
          )}
        </div>
        <div className="bg-white rounded-r-md w-5/6 flex p-5 items-end">
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
              <button className="bg-blue-500 text-white text-xs p-2 font-bold rounded mt-5 active:bg-blue-800">
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

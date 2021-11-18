import React from "react";
import { Link } from "react-router-dom";

class MovieCardLoading extends React.Component {
  render() {
    return (
      <div className="flex mb-4 md:w-6/12 w-11/12 px-2">
        <div className="h-48 rounded-l-md w-52 bg-gray-500 animate-pulse overflow-hidden"></div>
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
            <button
              className="bg-gray-500 rounded-r-md text-white animate-pulse text-xs p-2 font-bold rounded mt-5"
              disabled
            >
              View details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCardLoading;

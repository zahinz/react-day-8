import React from "react";
import { connect } from "react-redux";
import { searchMovieDetails } from "../../actions/index";
import { FaImdb } from "react-icons/fa";
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
    const urlParam = window.location.href.split("/");
    const id = urlParam[urlParam.length - 1];
    console.log(id);

    this.state = {
      movieID: id,
      data: {},
    };
  }

  componentDidMount() {
    this.props.onSearchMovieDetails(this.state.movieID);
  }

  componentDidUpdate(prevProp) {
    const { movieDetailsData } = this.props;
    if (prevProp.movieDetailsData.isLoading && !movieDetailsData.isLoading) {
      console.log(this.state.data);
      this.setState({ data: movieDetailsData.data }, () =>
        console.log("data", this.state)
      );
    }
  }

  changeMovie(changes) {
    // get the current index
    const currentIndex = this.props.movieData.data.findIndex(
      (list) => list.imdbID === this.props.movieDetailsData.data.imdbID
    );

    // get the imbdID for next index
    const nextImdbID = this.props.movieData.data[currentIndex + changes].imdbID;
    console.log(nextImdbID);
    this.props.onSearchMovieDetails(nextImdbID);
  }

  render() {
    return (
      <div className="bg-gray-200 w-screen min-h-screen flex flex-col items-center justify-center">
        {this.props.movieDetailsData.isLoading ? (
          <div className="font-bold text-lg text-gray-600">Loading...</div>
        ) : (
          <>
            <div className="lg:w-8/12 md:w-10/12 sm:w-4/5 w-11/12 bg-white rounded overflow-hidden flex items-center">
              <div className="w-auto h-96">
                <img
                  src={this.state.data.Poster}
                  alt={`Poster of ${this.state.data.Title}`}
                  className="h-full object-cover object-center"
                />
              </div>
              <div className="p-8 w-2/3 mx-auto">
                <div className="flex flex-col-reverse lg:flex-row md:flex-row justify-between item-center mb-6">
                  <div className="flex flex-col justify-center">
                    <p className="font-bold text-lg">{this.state.data.Title}</p>
                    <p className="text-sm text-gray-500">
                      {this.state.data.Actors}
                    </p>
                  </div>
                  <div className="bg-white border-2 max-w-min border-blue-600 rounded-3xl max-h-min text-blue-600 font-bold flex items-center justify-center px-6 py-1 ml-3 my-3">
                    <span className="mr-3">
                      <FaImdb size="1.7em" />
                    </span>
                    {this.state.data.imdbRating}
                  </div>
                </div>
                <p className="text-sm mb-4">{this.state.data.Plot}</p>

                {/* {this.state.data.Ratings.map((list) => (
              <div>
                <p>{list.Source}</p>
                <p>{list.Value}</p>
              </div>
            ))} */}
              </div>
            </div>
            <div className="mt-6 flex justify-between lg:w-8/12 md:w-10/12 sm:w-4/5 w-11/12">
              <Link to="/results">
                <button className="bg-gray-400 py-2 px-4 rounded-full text-sm font-semibold text-white">
                  return
                </button>
              </Link>
              <div>
                {/* prev button */}
                {this.props.movieData.data.findIndex(
                  (list) =>
                    list.imdbID === this.props.movieDetailsData.data.imdbID
                ) <= 0 ? (
                  <button
                    disabled
                    className="bg-gray-300 py-2 px-4 rounded-full text-sm font-semibold text-gray-800 mr-3 active:bg-blue-800"
                  >
                    Previous
                  </button>
                ) : (
                  <button
                    className="bg-blue-600 py-2 px-4 rounded-full text-sm font-semibold text-white mr-3 active:bg-blue-800"
                    onClick={() => this.changeMovie(-1)}
                  >
                    Previous
                  </button>
                )}

                {/* next button */}
                {this.props.movieData.data.findIndex(
                  (list) =>
                    list.imdbID === this.props.movieDetailsData.data.imdbID
                ) >= 9 ? (
                  <button
                    disabled
                    className="bg-gray-300 py-2 px-4 rounded-full text-sm font-semibold text-gray-800 mr-3 active:bg-blue-800"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="bg-blue-600 py-2 px-4 rounded-full text-sm font-semibold text-white mr-3 active:bg-blue-800"
                    onClick={() => this.changeMovie(+1)}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetailsData: state.movieDetails,
  movieData: state.movie,
});

const mapDispatchToProps = {
  onSearchMovieDetails: searchMovieDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);

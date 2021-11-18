import React from "react";
import { connect } from "react-redux";
import { searchMovieDetails } from "../../actions/index";
import { FaImdb } from "react-icons/fa";

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

  render() {
    return (
      <div className="bg-gray-200 w-screen min-h-screen flex items-center justify-center">
        <div className="lg:w-8/12 md:w-10/12 sm:w-4/5 w-11/12 bg-white rounded overflow-hidden flex items-center">
          <div className="w-1/3 h-96">
            <img
              src={this.state.data.Poster}
              alt={`Poster of ${this.state.data.Title}`}
              className="h-full object-cover"
            />
          </div>
          <div className="p-8 w-2/3">
            <div className="flex justify-between item-center mb-6">
              <div className="flex flex-col justify-center">
                <p className="font-bold text-lg">{this.state.data.Title}</p>
                <p className="text-sm text-gray-500">
                  {this.state.data.Actors}
                </p>
              </div>
              <div className="bg-blue-600 rounded-3xl max-h-full text-white font-bold flex items-center justify-center px-6 py-1">
                <span className="mr-3">
                  <FaImdb />
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
            {console.log("hello", this.props.movieDetailsData)}
          </div>
        </div>
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

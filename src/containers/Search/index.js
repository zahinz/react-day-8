import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdOutlineMovieFilter } from "react-icons/md";
import { connect } from "react-redux";
import { searchMovie } from "../../actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  submitSearch(e) {
    e.preventDefault();
    if (!this._searchInput.value) {
      alert("search field is empty");
      return;
    }
    console.log(this._searchInput.value);
    console.log(this.state.movieList);
    console.log("movie data", this.props.movieData.data);
    this.props.submitSearch(this._searchInput.value);
    return this.props.history.push("/results");
  }

  render() {
    return (
      <div className="bg-blue-600 h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="font-extrabold text-white text-4xl mb-5 flex items-center">
            Movie Magic{" "}
            <span className="ml-4">
              <MdOutlineMovieFilter size="1.5em" />
            </span>
          </div>
          <form
            onSubmit={(e) => this.submitSearch(e)}
            className="flex justify-between items-center"
          >
            <input
              className="text-gray-800 p-2 rounded w-96"
              type="text"
              ref={(e) => (this._searchInput = e)}
            />
            <button className="text-white ml-4 text-lg">
              <BsSearch size="1.5em" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieData: state.movie,
});

const mapDispatchToProps = {
  submitSearch: searchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

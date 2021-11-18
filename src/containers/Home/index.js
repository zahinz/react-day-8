import React from "react";
import MovieCard from "../../components/MovieCard";
import MovieCardLoading from "../../components/MovieCardLoading";
import { connect } from "react-redux";
import { searchMovie } from "../../actions";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  //   this.state = {
  //     movieList: [],
  //   };
  // }

  // componentDidMount() {
  //   console.log(this.state);
  //   const { movieData } = this.props;
  //   // this.setState({ movieList: movieData.data });
  //   // this.props.submitSearch("ironman");
  //   console.log({ movieData });
  // }

  // componentDidUpdate(prevProps) {
  //   const { movieData } = this.props;
  //   if (prevProps.movieData.isLoading && !movieData.isLoading) {
  //     this.setState({ movieList: movieData.data });
  //   }
  // }

  submitSearch(e) {
    e.preventDefault();
    if (!this._searchInput.value) {
      alert("search field is empty");
      return;
    }
    console.log(this._searchInput.value);
    // console.log(this.state.movieList);
    console.log("movie data", this.props.movieData.data);
    this.props.submitSearch(this._searchInput.value);
    this._searchInput.value = "";
  }

  render() {
    return (
      <div className="bg-gray-200 w-screen min-h-screen">
        <header className="fixed top-0 left-0 w-full h-16 bg-blue-600 flex justify-center items-center">
          <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 w-11/12 flex justify-between">
            <Link to="/">
              <p className="text-white font-bold text-xl">Movie Magic</p>
            </Link>
            <form
              onSubmit={(e) => this.submitSearch(e)}
              className="flex justify-between items-center"
            >
              <input
                className="text-gray-800 p-1 rounded"
                type="text"
                ref={(e) => (this._searchInput = e)}
              />
              <button className="text-white ml-4 text-lg">
                <BsSearch />
              </button>
            </form>
          </div>
        </header>

        <div className="flex justify-center mt-12">
          <div className="lg:w-3/5 md:w-4/5 sm:w-5/6 11/12 mt-10 flex flex-wrap justify-start">
            {this.props.movieData.isLoading ? (
              <>
                <MovieCardLoading />
                <MovieCardLoading />
                <MovieCardLoading />
                <MovieCardLoading />
                <MovieCardLoading />
                <MovieCardLoading />
                <MovieCardLoading />
                <MovieCardLoading />
              </>
            ) : (
              this.props.movieData.data.map((list) => (
                <MovieCard
                  id={list.imdbID}
                  poster={list.Poster}
                  title={list.Title}
                  year={list.Year}
                  type={list.Type}
                />
              ))
            )}
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

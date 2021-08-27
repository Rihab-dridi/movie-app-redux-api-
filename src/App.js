import "./App.css";
import MovieList from "./components/moviesList";
import Search from "./components/search";
function App() {
  
  const moviesList = [
    {
      _id: "5fedeef47c0ffe00176db1ca",
      title: "Devil's Mile",
      rate: 4,
      date: "2014",
      imgUrl:
        "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
      description:
        "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
      category: "Action | Crime",
      __v: 0,
    },
  ];

  return (
    <div className="App">
      <Search />
      <MovieList moviesList={moviesList} />
    </div>
  );
}

export default App;

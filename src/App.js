import "./App.css";
import Header from "./Components/HeaderPart/Header/Header";
import Explore from "./Components/Explore/Explore";
import Trendingtrips from "./Components/TrendingTrips/Trendingtrips";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Explore></Explore>
      <Trendingtrips />
    </div>
  );
}

export default App;

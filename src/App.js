import "./App.css";
import Header from "./Components/HeaderPart/Header/Header";
import Explore from "./Components/Explore/Explore";
import Trendingtrips from "./Components/TrendingTrips/Trendingtrips";
import WeekedTrips from "./Components/WeekedTrips/WeekedTrips";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Explore></Explore>
      <Trendingtrips />
      <WeekedTrips />
    </div>
  );
}

export default App;

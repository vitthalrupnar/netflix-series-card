import NetflixHeader from "./components/netflixHeader";
import NetflixSeries from "./components/netflixSeries";
import SeriesFooter from "./components/seriesFooter";

function App() {
  return (
    <>
      <NetflixHeader />
      <div className="parent bg-gradient-to-r  from-red-200 to-yellow-400">
      <div className="container">
        <NetflixSeries />
      </div>
      </div>
      <div>
        <SeriesFooter />
      </div>
    </>
  );
}

export default App;

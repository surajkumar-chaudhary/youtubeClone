import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContext from "./context/ContextApi";
import {
  Header,
  Feed,
  LeftNav,
  LeftNavMenuItem,
  SearchResult,
  SearchResultVideoCard,
  VideoCard,
  VideoDetails,
} from "./components";

function App() {
  return (
    <AppContext>
      <Header />
      <Header />
      <Feed />
      <LeftNav />
      <LeftNavMenuItem />
      <SearchResult />
      <SearchResultVideoCard />
      <VideoCard />
      <VideoDetails />
    </AppContext>
  );
}

export default App;

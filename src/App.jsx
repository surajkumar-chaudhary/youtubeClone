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
      {/* 
      <Header />
      <Feed />
      <LeftNav />
      <LeftNavMenuItem />
      <SearchResult />
      <SearchResultVideoCard />
      <VideoCard />
      <VideoDetails /> */}
      <Router>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="" element={<VideoDetails />} />
          </Routes>
        </div>
      </Router>
    </AppContext>
  );
}

export default App;

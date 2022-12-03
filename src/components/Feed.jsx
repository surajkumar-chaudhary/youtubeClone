import React, { useContext, useEffect } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../context/ContextApi";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  console.log(searchResults);
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid text-white grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading && Array.isArray(searchResults)
            ? searchResults.map((item, index) => {
                return <VideoCard key={index} video={item?.video} />;
              })
            : null}

          <div className="text-white">hellot there</div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

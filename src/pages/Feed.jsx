import SideNav from "../components/SideNav";
import { useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex bg-[#0f0f0f] min-h-screen text-white">
      <SideNav />
      <div>
        {!videos ? (
          <Loading />
        ) : (
          videos.map((item) => (
            <VideoCard key={item.video.videoId} video={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;

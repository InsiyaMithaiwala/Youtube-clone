import {VideoCard} from "./VideoCard"
import { Videos } from "@/videos"

export const VideoGrid = () => {
  return <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
      {Videos.map(video => <div className="p-2"> <VideoCard video={video} /> </div>)}
  </div>
}
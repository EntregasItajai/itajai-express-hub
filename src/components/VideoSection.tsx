import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import videoCover from "@/assets/video-cover-model.png";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-16 px-5 text-center bg-background">
      <div className="max-w-sm mx-auto">
        <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 max-h-[600px] mx-auto">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={videoCover}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/motoboy-video.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          
          {!isPlaying && (
            <div 
              className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center cursor-pointer group"
              onClick={toggleVideo}
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 mb-4">
                <Play size={32} className="text-primary ml-1" />
              </div>
              <div className="text-white text-center px-4">
                <h3 className="text-lg font-bold tracking-wide">
                  SUPORTE SOB DEMANDA E<br />
                  ASSISTÊNCIA OPERACIONAL
                </h3>
              </div>
            </div>
          )}
          
          {isPlaying && (
            <button
              onClick={toggleVideo}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
            >
              <Pause size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
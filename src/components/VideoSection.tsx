import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        <div 
          className="relative w-full aspect-video bg-gradient-to-br from-primary/90 to-primary rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-card hover:shadow-card-hover flex items-center justify-center group"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 42, 68, 0.8), rgba(26, 42, 68, 0.8)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop')`
          }}
        >
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <Play size={32} className="text-primary ml-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
}

const LazyImage = ({ src, alt, className, style, placeholder }: LazyImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div ref={ref} className={className} style={style}>
      {inView && (
        <>
          {!imageLoaded && !imageError && (
            <div className="w-full h-full bg-muted animate-pulse rounded" />
          )}
          <img
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            style={style}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

export default LazyImage;
import { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export const ImageWithLoader = ({
  src,
  alt,
  className,
  priority = false,
}: ImageWithLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-full bg-zinc-900 overflow-hidden ${
        !loaded ? "animate-pulse" : ""
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
      />
    </div>
  );
};

export default ImageWithLoader;

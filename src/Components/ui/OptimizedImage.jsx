import React, { memo, useState, useCallback, useRef, useEffect } from 'react';

const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  onLoad,
  onError,
  fallbackComponent,
  skeletonClassName = '',
  ...props
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef(null);

  const handleImageLoad = useCallback((event) => {
    setImageLoaded(true);
    onLoad?.(event);
  }, [onLoad]);

  const handleImageError = useCallback((event) => {
    setImageError(true);
    onError?.(event);
  }, [onError]);

  // Intersection Observer for lazy loading optimization
  useEffect(() => {
    if (loading === 'lazy' && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setImageSrc(src);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px', // Start loading 50px before the image comes into view
          threshold: 0.1,
        }
      );

      observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    } else {
      setImageSrc(src);
    }
  }, [src, loading]);

  if (imageError && fallbackComponent) {
    return fallbackComponent;
  }

  return (
    <div ref={imgRef} className="relative overflow-hidden">
      {/* Skeleton loader */}
      {!imageLoaded && (
        <div 
          className={`absolute inset-0 skeleton-shimmer transition-opacity duration-500 ease-in-out ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          } ${skeletonClassName}`}
        />
      )}
      
      {/* Actual image */}
      {imageSrc && (
        <img
          className={`transition-all duration-500 ease-in-out will-change-transform ${
            imageLoaded 
              ? 'opacity-100 animate-fade-in' 
              : 'opacity-0'
          } ${imageError ? 'hidden' : ''} ${className}`}
          src={imageSrc}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            imageRendering: 'auto',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            transformOrigin: 'center center',
            ...props.style,
          }}
          {...props}
        />
      )}
      
      {/* Default fallback */}
      {imageError && !fallbackComponent && (
        <div className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center animate-fade-in ${className}`}>
          <div className="text-center">
            <svg 
              className="w-8 h-8 mx-auto mb-2 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-500 text-xs">Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  );
});

export default OptimizedImage;

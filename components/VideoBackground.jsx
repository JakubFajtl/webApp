const VideoBackground = () => {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        {/* Video Element */}
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/treeBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        
      </div>
    );
  };
  
  export default VideoBackground;
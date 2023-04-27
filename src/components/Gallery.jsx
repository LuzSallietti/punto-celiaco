const Gallery = ({ images }) => {
  const numColumns = images.length;
  const columnWidth = '13rem';

  return (
    <div className="grid mb-4">
      
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${numColumns}, ${columnWidth})`,
          gridAutoFlow: "row",
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          
        }}
      >
        {images.map((image, index) => {
          
            return (
              <div key={Math.random()} className="h-48 mr-2">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={image}
                  alt=""
                ></img>
              </div>
            );
          
        })}
      </div>
    </div>
  );
};

export default Gallery;

const Gallery = ({ images }) => {
  const numColumns = images.length > 1 ? images.length - 1 : 1;
  const columnWidth = '7rem';

  return (
    <div className="grid gap-4">
      <div className="h-40 w-full">
        <img className="h-full w-full object-cover rounded-lg" src={images[0]} alt=""></img>
      </div>
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
          if (index > 0) {
            return (
              <div key={image} className="h-24 mr-4">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src={image}
                  alt=""
                ></img>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Gallery;

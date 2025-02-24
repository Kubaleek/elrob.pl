import Image from "next/image";

export default function CustomGalleryGrid({ images }: { images: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5  border p-5">
      {images.map((column, colIndex) => (
        <div
          key={colIndex}
          className={`grid gap-4`}
        >
          {column.map((src, imgIndex) => (
            <div key={imgIndex}>
              <Image
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={src}
                alt={`gallery-photo-${colIndex}-${imgIndex}`}
                width={250}
                height={250}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

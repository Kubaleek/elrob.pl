import Image from "next/image";

export default function CustomGalleryGrid({ images }: { images: string[][] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4  border-t border-r pr-5  pt-5">
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
                width={320}
                height={320}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

type ImageComponentProps = {
  imageClass: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ImageComponent({imageClass, imageSrc, imageAlt}: ImageComponentProps) : JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img
        className={imageClass}
        src={imageSrc}
        alt={imageAlt}
      />
    </div>
  );
}

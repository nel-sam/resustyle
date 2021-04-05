import React from 'react';
import './circle-image.scss';

type CircleImageProps = {
  url: string;
};

const CircleImage: React.FC<CircleImageProps> = ({ url }: CircleImageProps) => {
  return (
    <div className="circle-image-container">
      <img src={url}></img>
    </div>
  );
};

export default CircleImage;
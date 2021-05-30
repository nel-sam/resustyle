import React from 'react';
import './adspace.scss';

const AdSpace: React.FC = () => {
  const lines = (n: number) => {
    const stars = [];
    for (let i = 0; i < n; ++i) {
      stars.push(<p key={i}>Advertising Space</p>);
    }

    return stars;
  };

  return (
    <div className="adspace">
      {lines(3)}
    </div>);
};

export default AdSpace;
import React from 'react';
import './horizontal-line.scss';

export enum HorizontalLineWidths {
  full = 'full',
  half = 'half',
}

type HorizontalLineProps = {
  width?: HorizontalLineWidths,
};

const HorizontalLine: React.FC<HorizontalLineProps> = ({ width }: HorizontalLineProps) => {
  width = width ? width : HorizontalLineWidths.full;
  return (<div className={`hl-${width}`}></div>);
};

export default HorizontalLine;
import React from 'react';
import './horizontal-line.scss';

export enum HorizontalLineWidths {
  full = 'full',
  half = 'half',
}

type HorizontalLineProps = {
  width?: HorizontalLineWidths,
  color?: string,
  thicknessPx?: number;
};

const getWidth = (width: HorizontalLineWidths): string => {
  switch (width) {
    case HorizontalLineWidths.full: return '100%';
    case HorizontalLineWidths.half: return '50%';
    default: return '100%';
  }
};

const HorizontalLine: React.FC<HorizontalLineProps> =
  ({
    width = HorizontalLineWidths.full,
    color = 'black',
    thicknessPx = 1
  }: HorizontalLineProps) => {
    const styles = {
      borderColor: color,
      width: getWidth(width),
      borderWidth: `${thicknessPx}px`,
    };

    return (
      <div className="hl-parent" aria-hidden>
        <div className="hl-child" style={styles}></div>
      </div>);
  };

export default HorizontalLine;
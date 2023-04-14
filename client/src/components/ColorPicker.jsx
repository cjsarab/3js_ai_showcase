import React from 'react';

import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div
      className='absolute left-full ml-3'
    >
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={
          [  '#FF5733',  '#FFC300',  '#F8C471',  '#E67E22',  '#27AE60',  '#2ECC71',  '#3498DB',  '#8E44AD',  '#9B59B6',  '#E74C3C',  '#EC7063',  '#F1C40F']
        }
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker;
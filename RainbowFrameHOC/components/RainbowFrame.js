"use strict"
import React,{Fragment, Component} from 'react';
import withRainbowFrame from './RainbowColorHoc'

export default class RainbowFrame extends Component {
    render() {
        let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
        let FramedFragment=withRainbowFrame(colors)(Fragment);
        return (
          <FramedFragment>
            Hello!
          </FramedFragment>
        );
      }
}
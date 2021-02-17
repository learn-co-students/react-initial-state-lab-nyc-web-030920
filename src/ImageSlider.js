import React, { Component } from 'react';

class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
          currentSlideIndex: 0
        }
      }

    currentSlideIndex = () => {
        const newCount = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newCount
        })
    }

    render() {
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        );
    }
}

export default ImageSlider;

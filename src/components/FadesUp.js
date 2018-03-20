import React from "react";
import { CSSTransitionGroup } from "react-transition-group"; // ES6

export const fadesUp = Component => {
  return class FadesUp extends React.Component {
    componentWillApper = () => {
      debugger;
    };
    componentWillEnter = () => {
      debugger;
    };
    render() {
      let width = window.screen.width * 1.15;
      let height = window.screen.height * 1.15;
      console.log(width, height);
      // debugger;
      return (
        <div
        // style={{
        //   position: "relative",
        //   top: "-100px",
        //   left: "-192px",
        //   width: width,
        //   height: height,
        //   backgroundColor: "blue"
        // }}
        >
          <CSSTransitionGroup
            transitionAppear={false}
            transitionAppearTimeout={2000}
            transitionEnterTimeout={4000}
            transitionLeaveTimeout={4000}
            transitionName="SlideIn"
          >
            <Component {...this.props} />
          </CSSTransitionGroup>
        </div>
      );
    }
  };
};

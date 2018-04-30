import React from "react";
import { CSSTransitionGroup } from "react-transition-group"; // ES6

const PageShell = Page => {
  return props => (
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
        transitionAppear={true}
        transitionAppearTimeout={2000}
        transitionEnterTimeout={4000}
        transitionLeaveTimeout={4000}
        transitionName="Test"
      >
        <Page key={props.location.key} {...props} />
      </CSSTransitionGroup>
    </div>
  );
};
export default PageShell;

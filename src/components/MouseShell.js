import React from "react";
import { Icon, Grid, Segment, Divider } from "semantic-ui-react";
import { CSSTransitionGroup } from "react-transition-group"; // ES6
import { StyleSheet, css } from "aphrodite";

export const mouseShell = Page => {
  return class MouseShell extends React.Component {
    handleMouseMove = e => {
      const x = this.props;
      // console.log("mouse", this.props);
      if (this.props.mouse.type == "hover") {
        this.props.setMousePointer(2);
      } else {
        this.props.setMousePointer(0);
      }
      // const pointer = this.props.mouse.type === "hover" ? 2 : 0;
      // debugger;
      // this.props.setMousePointer(pointer);
      this.props.setMouseCoordinates({
        x: e.pageX,
        y: e.pageY
      });
    };
    handleOnWheel = e => {
      this.props.setMousePointer(1);
      this.props.setMouseCoordinates({
        x: e.pageX,
        y: e.pageY
      });
    };
    render() {
      // console.log("props mouseshell", this.props);
      const translateKeyframes = {
        "0%": {
          transform: "scale3d(0,0,0)"
        },

        "100%": {
          transform: "scale3d(1,1,1)"
        }
      };
      const translateKeyframesLeave = {
        "0%": {
          transform: "scale3d(1,1,1)",
          backgroundColor: "rgba(248,248,248,0.4)",
          borderColor: "rgba(248,248,248,1)"
        },

        "100%": {
          transform: "scale3d(0.2,0.2,0.2)",
          backgroundColor: "rgba(248,248,248,1)",
          borderColor: "rgba(248,248,248,0)"
        }
      };
      const offsetMouse = {
        from: {
          transform: "translate(-50%,-50%)"
        },
        to: { transform: "translate(-50%,-50%)" }
      };
      const opacityKeyframesLeave = {
        from: {
          opacity: 0
        },

        to: {
          opacity: 1
        }
      };
      const opacityKeyframes = {
        from: {
          opacity: 0
        },

        to: {
          opacity: 1
        }
      };

      const styles = StyleSheet.create({
        wrapper: {
          width: "100vw",
          height: "100vh",
          cursor: "none"
        },
        default: {
          position: "absolute",
          height: "17px",
          width: "17px"
        },
        outerCircle: {
          pointerEvents: "none",
          margin: 0,
          height: "85px",
          width: "85px",
          backgroundColor: "rgba(0,0,0,0.3)",
          border: "solid",
          borderWidth: "2px",
          borderColor: "rgba(248,248,248,.6)",
          borderRadius: "50%",
          position: "absolute",
          top: this.props.mouse.coordinates.y,
          left: this.props.mouse.coordinates.x,
          animationName: [translateKeyframes, opacityKeyframes],
          animationDuration: "750ms, 500ms",
          animationIterationCount: "1",
          textAlign: "center",
          verticalAlign: "middle",
          borderSizing: "content",
          transform: "translate(-50%,-50%)"
        },
        outerCircleMouseDefault: {
          cursor: "none",
          pointerEvents: "none",
          height: "85px",
          width: "85px",
          backgroundColor: "rgba(248, 248, 248, 0.03)",
          borderRadius: "50%",
          border: "solid",
          borderWidth: "2px",
          borderColor: "rgba(248,248,248,.6)",
          position: "absolute",
          top: this.props.mouse.coordinates.y - 42.5,
          left: this.props.mouse.coordinates.x - 42.5,
          animationName: [translateKeyframesLeave],
          animationDuration: "750ms",
          animationIterationCount: "1",
          animationFillMode: "forwards"
        },
        outerCircleMouseClick: {
          cursor: "none",
          pointerEvents: "none",
          height: "85px",
          width: "85px",
          backgroundColor: "rgba(248, 248, 248, 0.03)",
          border: "solid",
          borderWidth: "2px",
          borderColor: "rgba(248,248,248,.6)",
          borderRadius: "50%",
          position: "absolute",
          top: this.props.mouse.coordinates.y,
          left: this.props.mouse.coordinates.x,
          animationName: [translateKeyframes],
          animationDuration: "750ms, 500ms",
          animationIterationCount: "1",
          transform: "translate(-50%,-50%)"
        },
        mouseClick: {
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          height: "17px",
          width: "17px",
          backgroundColor: "rgba(248,248,248)",
          borderRadius: "50%"
        }
      });
      // <div key="click" className={css(styles.outerCircleMouseDefault)}>
      //   <Icon name="circle" className={css(styles.default)} fitted inverted />
      // </div>
      const mousePointers = [
        <div key="default" className={css(styles.outerCircleMouseDefault)}>
          <div
            style={{
              position: "absolute",
              height: "17px",
              width: "17px",
              top: "37%",
              left: "37%",
              borderRadius: "50%"
            }}
          />
        </div>,
        <Segment key="hover" className={css(styles.outerCircle)}>
          <Icon
            className={css(styles.hover)}
            name="chevron up"
            fitted
            inverted
            style={{ marginTop: "6%" }}
          />
          <Divider className={css(styles.hover)} hidden fitted />
          <Icon
            className={css(styles.hover)}
            name="chevron down"
            fitted
            inverted
          />
        </Segment>,
        <Segment key="click" className={css(styles.outerCircleMouseClick)}>
          <Icon
            className={css(styles.mouseClick)}
            name="circle"
            fitted
            inverted
            style={{ marginTop: "30%" }}
          />
        </Segment>
      ];
      return (
        <div
          onMouseMove={this.handleMouseMove}
          className={css(styles.wrapper)}
          onScroll={this.handleMouseMove}
          onWheel={this.handleOnWheel}
        >
          <Page {...this.props} />
          {mousePointers[this.props.mouse.pointer]}
        </div>
      );
    }
  };
};

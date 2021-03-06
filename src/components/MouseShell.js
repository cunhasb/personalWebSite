import React from "react";
import { Icon, Segment, Divider } from "semantic-ui-react";
import { StyleSheet, css } from "aphrodite";

export const mouseShell = Page => {
  return class MouseShell extends React.Component {
    handleMouseMove = e => {
      // console.log("mouse", this.props);
      if (this.props.mouse.type == "hover") {
        this.props.setMouseCoordinates({
          x: e.pageX,
          y: e.pageY
        });
        this.props.setMousePointer(2);
      } else if (this.props.mouse.type == "scroll") {
        this.props.setMouseCoordinates({
          x: e.pageX,
          y: e.pageY
        });
        this.props.setMousePointer(1);
      } else {
        this.props.setMouseCoordinates({
          x: e.pageX,
          y: e.pageY
        });
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
          backgroundColor: "rgba(0,0,0,0.4)",
          borderColor: "rgba(0,0,0,0.4)"
        },

        "100%": {
          transform: "scale3d(0.2,0.2,0.2)",
          backgroundColor: "rgba(0,0,0,1)",
          borderColor: "rgba(0,0,0)"
        }
      };
      // const offsetMouse = {
      //   from: {
      //     transform: "translate(-50%,-50%)"
      //   },
      //   to: { transform: "translate(-50%,-50%)" }
      // };
      // const opacityKeyframesLeave = {
      //   from: {
      //     opacity: 0
      //   },
      //
      //   to: {
      //     opacity: 1
      //   }
      // };
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
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "solid",
          borderWidth: "2px",
          borderColor: "rgba(0,0,0.7)",
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
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          borderRadius: "50%",
          border: "solid",
          borderWidth: "2px",
          borderColor: "rgba(0,0,0,.7)",
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
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          border: "solid",
          borderWidth: "2px",
          borderColor: "rgba(0,0,0,.6)",
          borderRadius: "50%",
          position: "absolute",
          top: this.props.mouse.coordinates.y - 42.5,
          left: this.props.mouse.coordinates.x - 42.5,
          animationName: [translateKeyframes],
          animationDuration: "750ms, 500ms",
          animationIterationCount: "1"
        },
        mouseClick: {
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          height: "17px",
          width: "17px",
          backgroundColor: "rgba(0,0,0)",
          borderRadius: "50%"
        }
      });

      const mousePointers = [
        <div key="default" className={css(styles.outerCircleMouseDefault)}>
          <div
            style={{
              position: "absolute",
              height: "17px",
              width: "17px",
              top: "39%",
              left: "39%",
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

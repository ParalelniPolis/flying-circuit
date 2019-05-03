import { Component } from "react";
import config from "../config";

const { css } = config;

const withResponsiveCSS = ComposedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { mediaQuery: "small" };

      this.onResize = this.onResize.bind(this);
    }
    componentDidMount() {
      window.addEventListener("resize", this.onResize);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }
    onResize() {
      if (
        window.innerWidth >= css.mediaQueries.mobile.minWidth &&
        window.innerWidth < css.mediaQueries.phablet.minWidth
      ) {
        this.setState({ mediaQuery: "mobile" });
      } else if (
        window.innerWidth >= css.mediaQueries.phablet.minWidth &&
        window.innerWidth < css.mediaQueries.tablet.minWidth
      ) {
        this.setState({ mediaQuery: "phablet" });
      } else if (
        window.innerWidth >= css.mediaQueries.tablet.minWidth &&
        window.innerWidth < css.mediaQueries.desktop.minWidth
      ) {
        this.setState({ mediaQuery: "tablet" });
      } else if (
        window.innerWidth >= css.mediaQueries.desktop.minWidth &&
        window.innerWidth < css.mediaQueries.desktopHD.minWidth
      ) {
        this.setState({ mediaQuery: "desktop" });
      } else if (window.innerWidth >= css.mediaQueries.desktopHD.minWidth) {
        this.setState({ mediaQuery: "desktopHD" });
      } else {
        this.setState({ mediaQuery: "small" });
      }
      console.log(
        this.state.mediaQuery,
        window.innerWidth,
        css.mediaQueries,
        window.innerWidth > css.mediaQueries.desktopHD.minWidth
      );
    }
    render() {
      return <ComposedComponent {...this.props} responsiveCSS={css.mediaQueries[this.state.mediaQuery]} />;
    }
  };

export default withResponsiveCSS;

import PropTypes from "prop-types";
import Link from "next/link";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export function ScrollIcon({ scrollTo, smoothScroll }) {
  return (
    <span className="scroll-btn">
    { smoothScroll ? (
      <AnchorLink offset="100" href={scrollTo}>
        <span className="mouse">
          <span />
        </span>
      </AnchorLink>
    ) : (
      <Link href={scrollTo}>
        <span className="mouse">
          <span />
        </span>
      </Link>
    )
    }
      <style jsx>{`
        @-webkit-keyframes ani-mouse {
          0% {
            opacity: 1;
            top: 29%;
          }
          15% {
            opacity: 1;
            top: 50%;
          }
          50% {
            opacity: 0;
            top: 50%;
          }
          100% {
            opacity: 0;
            top: 29%;
          }
        }
        @-moz-keyframes ani-mouse {
          0% {
            opacity: 1;
            top: 29%;
          }
          15% {
            opacity: 1;
            top: 50%;
          }
          50% {
            opacity: 0;
            top: 50%;
          }
          100% {
            opacity: 0;
            top: 29%;
          }
        }
        @keyframes ani-mouse {
          0% {
            opacity: 1;
            top: 29%;
          }
          15% {
            opacity: 1;
            top: 50%;
          }
          50% {
            opacity: 0;
            top: 50%;
          }
          100% {
            opacity: 0;
            top: 29%;
          }
        }
        .scroll-btn {
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          text-align: center;
        }
        .scroll-btn > * {
          display: inline-block;
          line-height: 18px;
          font-size: 13px;
          font-weight: normal;
          color: #7f8c8d;
          color: #3c3c3c;
          font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
          letter-spacing: 2px;
        }
        .scroll-btn > *:hover,
        .scroll-btn > *:focus,
        .scroll-btn > *.active {
          color: #3c3c3c;
        }
        .scroll-btn > *:hover,
        .scroll-btn > *:focus,
        .scroll-btn > *:active,
        .scroll-btn > *.active {
          opacity: 0.8;
          filter: alpha(opacity=80);
        }
        .scroll-btn .mouse {
          position: relative;
          display: block;
          width: 35px;
          height: 55px;
          margin: 0 auto 20px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border: 3px solid #3c3c3c;
          border-radius: 23px;
        }
        .scroll-btn .mouse > * {
          position: absolute;
          display: block;
          top: 29%;
          left: 50%;
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          background: #3c3c3c;
          border-radius: 50%;
          -webkit-animation: ani-mouse 2.5s linear infinite;
          -moz-animation: ani-mouse 2.5s linear infinite;
          animation: ani-mouse 2.5s linear infinite;
        }
      `}</style>
    </span>
  );
}

ScrollIcon.propTypes = {
  scrollTo: PropTypes.string.isRequired,
  smoothScroll: PropTypes.bool
};

ScrollIcon.defaultProps = {
  scrollTo: "#",
  smoothScroll: false
}

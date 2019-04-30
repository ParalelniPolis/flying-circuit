import PropTypes from "prop-types";

export function Section({ id, children }) {
  return (
    <div className="section" id={id}>
      {children}
      <style jsx>{`
        .section {
          text-align: center;
          z-index: 10;
        }
      `}</style>
    </div>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};

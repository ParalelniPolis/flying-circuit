import PropTypes from "prop-types"

export function Section({ id, children }) {
  return (
    <div id={id}>{children}</div>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any
}

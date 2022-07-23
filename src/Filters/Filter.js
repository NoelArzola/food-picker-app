import React from "react";

const Filter = (props) => {
  return (
    <span
      className="mdc-evolution-chip"
      role="row"
      key={props.filter.display}
      id={props.filter.key}
    >
      <span
        className="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
        role="gridcell"
      >
        <button
          className="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
          type="button"
          tabIndex="0"
        >
          <span className="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
          <span className="mdc-evolution-chip__text-label">
            {props.filter.display}
          </span>
        </button>
      </span>
    </span>
  );
};

export default Filter;

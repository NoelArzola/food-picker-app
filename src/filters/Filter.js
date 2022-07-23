import React from "react";

const Filter = (props) => {
  return (
    <span
      class="mdc-evolution-chip"
      role="row"
      key={props.filter.display}
      id={props.filter.key}
    >
      <span
        class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
        role="gridcell"
      >
        <button
          class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
          type="button"
          tabindex="0"
        >
          <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
          <span class="mdc-evolution-chip__text-label">
            {props.filter.display}
          </span>
        </button>
      </span>
    </span>
  );
};

export default Filter;

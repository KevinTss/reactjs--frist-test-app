import React from "react";
import PropTypes from "prop-types";

// import Icon from "../../../UI/Icon";
// import Text from '../../../UI/Text';
import { StyledLegend, StyledLegendItem, StyledIconWrapper } from "./styled";

const CustomizedLegend = ({ payload, showCorrectAnswers }) => (
  <StyledLegend>
    {payload.map((entry, index) => (
      <StyledLegendItem color={entry.color} key={`item-${index}`}>
        {/* <Text
          label={entry.value}
          size='s'
          tag='span'
          translate={false}
          weight='bold'
        /> */}
        {entry.value}
        {entry.payload.percent
          ? `${(entry.payload.percent * 100).toFixed(2)}%`
          : "0%"}
        {/* <Text
          label={
            entry.payload.percent
              ? `${(entry.payload.percent * 100).toFixed(2)}%`
              : '0%'
          }
          size='xs'
          tag='span'
          tint='darkest'
          translate={false}
          weight='bold'
        /> */}
        {showCorrectAnswers ? (
          <StyledIconWrapper>
            {entry.payload.isCorrect ? (
              // <Icon name='fas fa-check-circle' />
              <i class="fas fa-check-circle" />
            ) : null}
          </StyledIconWrapper>
        ) : null}
      </StyledLegendItem>
    ))}
  </StyledLegend>
);

CustomizedLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.string
    })
  ),
  showCorrectAnswers: PropTypes.bool
};

export default CustomizedLegend;

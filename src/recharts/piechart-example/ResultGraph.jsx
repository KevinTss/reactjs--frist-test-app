import React, { PureComponent } from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";
import PropTypes from "prop-types";

import { StyledResultGraphWrapper, StyledResultGraphContainer } from "./styled";
import CustomizedLegend from "./CustomizedLegend";

export default class ResultGraph extends PureComponent {
  render() {
    const { data, showCorrectAnswers } = this.props;

    return (
      <StyledResultGraphWrapper>
        <StyledResultGraphContainer>
          <PieChart height={450} width={250}>
            <Legend
              chartWidth={250}
              content={({ payload }) => (
                <CustomizedLegend
                  payload={payload}
                  showCorrectAnswers={showCorrectAnswers}
                />
              )}
            />
            <Pie
              cx={120}
              cy={120}
              data={data}
              dataKey="value"
              innerRadius={45}
              nameKey="name"
              outerRadius={65}
              style={{ backgroundColor: "blue" }}
            >
              {data.map((entry, index) => (
                <Cell fill={entry.color} key={index} />
              ))}
            </Pie>
          </PieChart>
        </StyledResultGraphContainer>
      </StyledResultGraphWrapper>
    );
  }
}

ResultGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  showCorrectAnswers: PropTypes.bool
};

ResultGraph.defaultProps = {
  showCorrectAnswers: false
};

import styled from "styled-components";

export const StyledResultGraphWrapper = styled.div`
  display: flex;
  width: 300px;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const StyledResultGraphContainer = styled.div`
  display: flex;
  background-color: white;
  width: 250px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const StyledLegend = styled.ul`
  width: 240px;
  max-height: 185px;
  overflow-y: scroll;
  counter-reset: number 0;
`;

export const StyledLegendItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  width: 100%;
  ::before {
    counter-increment: number;
    content: counter(number);
    background-color: ${({ color }) => color};
    color: white;
    font-weight: bold;
    padding: 5px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 100%;
    text-align: center;
  }
  > span:first-child {
    flex-grow: 1;
    margin-left: 5px;
  }
`;

export const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 20px;
  min-width: 20px;
  margin-left: 10px;
  color: #5ae0a6;
`;

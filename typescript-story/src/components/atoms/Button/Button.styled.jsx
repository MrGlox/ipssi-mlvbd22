import styled, { css } from "styled-components";
import { color } from "styled-system";

export default styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 14px;
  padding: 11px 20px;

  ${({ mode }) =>
    mode
      ? css`
          color: white;
          background-color: #1ea7fd;
        `
      : css`
          color: #333;
          background-color: transparent;
          box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 12px;
      padding: 10px 16px;
    `}

  ${({ size }) =>
    size === "large" &&
    css`
      font-size: 16px;
      padding: 12px 24px;
    `}
    
  ${color}
`;

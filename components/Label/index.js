import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Label = styled.div(
  ({ theme, color }) => css`
    font-size: 1.8rem;
    color: ${theme.colors[color || "black"]};
    font-weight: 800;
    margin: 1.2rem 0;
  `
);

export default Label;

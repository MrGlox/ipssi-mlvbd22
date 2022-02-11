import ButtonProps from "./Button.types";
import StyledButton from "./Button.styled";

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = "medium",
  children,
  ...props
}: ButtonProps) => (
  <StyledButton mode={primary} type="button" size={size} {...props}>
    {children}
  </StyledButton>
);

export default Button;

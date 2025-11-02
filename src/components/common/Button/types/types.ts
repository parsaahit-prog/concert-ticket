export type ButtonVariant = "primary" | "secondary";
export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  tabIndex?: number;
  name?: string;
}

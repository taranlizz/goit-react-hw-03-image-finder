import { ButtonEl } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <ButtonEl type="button" onClick={onClick}>
      {children}
    </ButtonEl>
  );
};

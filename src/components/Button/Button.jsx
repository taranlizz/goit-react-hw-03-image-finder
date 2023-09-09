import { ButtonEl, ButtonWrapper } from './Button.styled';

export const Button = ({ children, onClick }) => {
  return (
    <ButtonWrapper>
      <ButtonEl type="button" onClick={onClick}>
        {children}
      </ButtonEl>
    </ButtonWrapper>
  );
};

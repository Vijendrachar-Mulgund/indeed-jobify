import { ButtonWrapper } from "./../../../styles/modules/ButtonWraper.js";

export const Button = ({ icon, label, type }) => {
  return (
    <ButtonWrapper type={type}>
      <div className="icon-container">{icon}</div>
      <div>{label}</div>
    </ButtonWrapper>
  );
};

export default Button;

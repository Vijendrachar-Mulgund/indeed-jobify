import { ButtonWrapper } from "../../../styles/modules/ButtonWrapper.js";

export const Button = ({ icon, label, type, onClickHandler }) => {
  return (
    <ButtonWrapper onClick={onClickHandler} type={type}>
      <div className="button-container">
        {icon && <div className="icon-container">{icon}</div>}
        <div>{label}</div>
      </div>
    </ButtonWrapper>
  );
};

export default Button;

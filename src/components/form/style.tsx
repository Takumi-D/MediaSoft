import { styled } from "styled-components";

const InputText = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000000;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #ffffff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const InputRadio = styled.input``;
const Label = styled.label`
  margin-bottom: 0.5rem;
  display: block;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Form = styled.form`
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
`;

const Button = styled.button`
  padding: 6px 12px;
  border: 1px solid #0d6efd;
  background-color: #0d6efd;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: #0a58ca;
    border-color: #0a58ca;
    color: #ffffff;
  }
`;

const WrapperFormContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export {
  InputText,
  Label,
  ErrorMessage,
  Form,
  Button,
  InputRadio,
  WrapperFormContent,
};

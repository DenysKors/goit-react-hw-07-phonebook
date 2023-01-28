import styled from 'styled-components';

export const Form = styled.form`
  padding: 30px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-weight: 500;
  font-size: 20px;
`;

export const FormInput = styled.input`
  padding-left: 3px;
  padding-right: 3px;
  width: 250px;
  min-height: 30px;
  font-size: 16px;

  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: cadetblue;
  }
`;

export const FormButton = styled.button`
  width: 200px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.88;
  text-align: center;
  color: #ffffff;

  border: none;
  border-radius: 4px;
  background-color: cornflowerblue;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0c49b9;
  }
`;

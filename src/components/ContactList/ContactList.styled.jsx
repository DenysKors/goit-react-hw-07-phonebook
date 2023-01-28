import styled from 'styled-components';

export const Text = styled.p`
  margin-right: 20px;
  display: inline-block;

  font-weight: 500;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 70px;
  padding: 3px;
  font-weight: 500;
  font-size: 14px;
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

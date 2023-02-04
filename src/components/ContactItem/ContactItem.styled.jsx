import styled from 'styled-components';

export const Item = styled.li`
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  border: 2px solid rgba(33, 33, 33, 0.1);
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Text = styled.p`
  display: inline-block;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.18;
`;

export const Button = styled.button`
  width: 70px;
  height: 30px;
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

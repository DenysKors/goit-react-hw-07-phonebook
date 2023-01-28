import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-weight: 500;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  margin-left: 10px;
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

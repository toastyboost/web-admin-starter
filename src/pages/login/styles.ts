import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  background-color: #fff;
  padding: 24px 24px 24px 24px;
  border-radius: 3px;

  h4 {
    text-align: center;
    padding-bottom: 8px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  button {
    width: 100%;
    height: 40px;
  }
`;

export const Rember = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

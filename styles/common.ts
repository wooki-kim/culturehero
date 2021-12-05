import styled from "styled-components";
export const Main = styled.main`
  max-width: 720px;
  margin: 0 auto;
  min-height: 500px;
`;
export const FunctionContainer = styled.section`
  position: absolute;
  left: 10px;
  bottom: 20px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const ExitButton = styled.button`
  content: "X";
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  display: inline-block;
  background: rgba(102, 102, 102);
  font-weight: bold;
  margin-right: 5px;
`;
export const LikeButton = styled.button`
  width: 80%;
  display: inline-block;
  background: rgba(95, 154, 246);
  height: 40px;
  color: #fff;
`;

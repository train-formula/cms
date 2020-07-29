import styled from 'styled-components';


export const SplitContent = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-areas: "left right";
  grid-template-rows: 100%;
  height: 100%;
  width: 100%;
  
`;

export const SplitContentLeft = styled.div`
  grid-area: left;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid rgba(0, 0, 0, 0.12); 
`;

export const SplitContentRight = styled.div`
  grid-area: right;
  width: 100%;
  height: 100%;
`;
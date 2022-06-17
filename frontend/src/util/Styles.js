import styled from "styled-components";


export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  //// sm
  //@media (min-width: 640px) {
  //  max-width: 640px;
  //}
  //// md
  //@media (min-width: 768px) {
  //  max-width: 768px;
  //}
  //// lg
  //@media (min-width: 1024px) {
  //  max-width: 1024px;
  //}
  //// xl
  //@media (min-width: 1280px) {
  //  max-width: 1280px;
  //}
  //// 2xl
  //@media (min-width: 1536px) {
  //  max-width: 1536px;
  //}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({gridTemplate}) => gridTemplate ? gridTemplate : "50% 50%"};
`

export const ImportantButton = styled.button`
  cursor: pointer;
  color: red;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
`;
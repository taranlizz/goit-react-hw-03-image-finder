// .Button {
//   padding: 8px 16px;
//   border-radius: 2px;
//   background-color: #3f51b5;
//   transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   text-align: center;
//   display: inline-block;
//   color: #fff;
//   border: 0;
//   text-decoration: none;
//   cursor: pointer;
//   font-family: inherit;
//   font-size: 18px;
//   line-height: 24px;
//   font-style: normal;
//   font-weight: 500;
//   min-width: 180px;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
// }

// .Button:hover,
// .Button:focus {
//   background-color: #303f9f;
// }

import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const ButtonEl = styled.button`
  padding: 10px 15px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #9786f6;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #9786f6;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #9786f6;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #9786f6;
  }

  &:active {
    transform: scale(0.9);
  }
`;

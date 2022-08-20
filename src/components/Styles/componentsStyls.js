import styled from "styled-components";


export const CalWrapper = styled.div`
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;

export const CalDisplay = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #4357692d;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

export const CalButton = styled.button`
  border: none;
  background-color: rgb(80, 60, 209);
  font-size: 24px;
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  outline: none;


button:hover {
  background-color: rgb(61, 43, 184);
}

.equals {
  grid-column: 3 / 5;
  background-color: rgb(243, 61, 29);
}

.equals:hover {
  background-color: rgb(228, 39, 15);
}
`;

export const CalButtonBox = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;
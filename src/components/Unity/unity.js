import React from "react";
import styled from 'styled-components'

const Drome=styled.iframe`
    width: 85vw;
    margin-top: -7vh;
    margin-left: -17vw;
    height: 80vh;
    border: none;
    box-shadow: 0 0 10vh black;
`
export class NEURODROME extends React.Component {

  render() {
      return (
        <Drome src="https://c.simmer.io/static/unityFrame/index.html?url=https%3A%2F%2Fsimmercdn.com%2Funity%2Fy9L9FQJz8EgtoR0WjUGcs3cg1GX2%2Fcontent%2F0c5fa49f-30df-32c3-b7ca-d035627aab3d&imagePath=screens/0.png"></Drome>
      );
  }
}
export default NEURODROME;
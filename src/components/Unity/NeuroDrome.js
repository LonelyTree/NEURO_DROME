import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
 
class NEURO extends React.Component {
  constructor(props) {
    super(props);
 
    this.unityContent = new UnityContent(
      "./Build/Soccer.json",
      "./Build/UnityLoader.js",{
        adjustOnWindowResize: true
      }
    );
  }
 
  render() {
    return( <Unity unityContent={this.unityContent} />);
  }
}

export default NEURO
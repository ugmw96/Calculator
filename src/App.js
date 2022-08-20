import Display from "./components/Display";
import { CalButton, CalButtonBox } from "./components/Styles/componentsStyls";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import '../src/components/Styles/styles.css';

function App() {
  const ButtonVals =[ 
    ["c","+-","%","/"],
    [1,2,3,"*"],
    [4,5,6,"-"],
    [7,8,9,"+"],
    [0,".","=",]
  ]
  return (
    <Wrapper >
      <Display value="0"/>
        <CalButtonBox>
          {
            ButtonVals.flat().map((btn,i) => {
              return (
                <Button key={i} value={btn} className={btn === "=" ? "equals" : "button" } onClick={() => {
                  console.log(`${btn} clicked`);
                }}/>
              )
            })
          }
          {/* <CalButton value="0" onClick={() =>  {console.log("Button Clicked")}}/> */}
        </CalButtonBox>
    </Wrapper>
  );
}

export default App;

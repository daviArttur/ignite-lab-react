import { Button } from "./components/Button";
import { TextInput } from "./components/TextInput";
import "./styles/global.css"
import { Envelope } from "phosphor-react"
import { CheckBox } from "./components/Checkbox";

function App() {
  return (
    <>
      <TextInput.Root>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Type your email address"></TextInput.Input>
      </TextInput.Root>

      <CheckBox />
    </>
    

  )
}

export { App };

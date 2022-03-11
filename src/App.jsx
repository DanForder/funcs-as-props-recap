import { useState } from "react";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";

const App = () => {
  const [message, setMessage] = useState("default");

  const handleAppleClick = () => {
    setMessage("apple");
  };

  const handleOrangeClick = () => {
    setMessage("orange");
  };

  const handleWatermelonClick = () => {
    setMessage("watermelon");
  };

  const handleUserInput = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <>
      <h1>{message}</h1>
      <Button label="apple" onClick={handleAppleClick} />
      <Button label="orange" onClick={handleOrangeClick} />
      <Button label="watermelon" onClick={handleWatermelonClick} />
      <TextInput
        id="user-input"
        label="your message"
        onChange={handleUserInput}
      />
    </>
  );
};

export default App;

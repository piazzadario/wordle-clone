import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";


function OnScreenKeyboard({onKeyPressed}) {

  const keyboardLayout = {'default': [
    'q w e r t y u i o p',
    'a s d f g h j k l',
    'ENTER z x c v b n m ←',
  ],};

  return (
      <Keyboard layoutName='default' layout={keyboardLayout} onKeyPress={onKeyPressed}></Keyboard>
  );
}

export default OnScreenKeyboard;

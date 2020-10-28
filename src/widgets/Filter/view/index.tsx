import React, {
  useState,
  useCallback, 
  useRef,
} from 'react';

import {CustomInputProps} from './types';

import {
  Wrapper,
  Input,
} from './styles';

const CustomInput: React.FC<CustomInputProps> = ({
  value='',
  placeholder='',
  onInput,
}: CustomInputProps) => {

  const [isFocus, setFocus] = useState(false);
  const isShownPlaceholder = value === '' && !isFocus;

  const inputElement = useRef(null);

  const setFocusHandler = useCallback(() => {
    setFocus(true);
  }, []
  );

  const setBlurHandler = useCallback(() => {
    setFocus(false);
  }, []
  );

  const onInputHandler = useCallback((
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const inputValue = Number(event.currentTarget.value);
    if (inputValue === 0 || inputValue) {
      onInput(inputValue);
    }
  }, 
  [onInput]
  );

  return (
    <Wrapper
      onClick={setFocusHandler}
    >
      <Input
        value={isShownPlaceholder
          ? placeholder
          : value
        }
        isShownPlaceholder={isShownPlaceholder}
        ref={inputElement}
        onInput={onInputHandler}
        onBlur={setBlurHandler}
      />
    </Wrapper>
  );
};

export default CustomInput;

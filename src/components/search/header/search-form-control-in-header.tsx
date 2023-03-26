import {
  Flex,
  FormControl,
  FormControlProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd
} from '@chakra-ui/react'
import React, { FormEventHandler, useCallback } from 'react'
import { STYLES } from 'lib/constants'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ChakraFontAwesomeIcon from 'components/foundations/chakra-font-awesome-icon'
import { useSearchModalDisclosure } from "../../../hooks/useSearchModalDisclosure";
import { useKeyboard } from "../../../hooks/useKeyboard";


interface Props {
  formControlProps?: FormControlProps
}

/**
 * ヘッダーの検索入力欄
 * @param formControlProps
 */
function SearchFormControlInHeader({ formControlProps }: Props) {
  const { onOpen } = useSearchModalDisclosure()
  const {actionKey} = useKeyboard()

  const handleInput: FormEventHandler = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
    }
, [])


  return (
    <FormControl
      position={'relative'}
      width={{ base: 'full', md: '2xs' }}
      {...formControlProps}
    >
      {/* 入力欄と虫眼鏡アイコンで1つの検索入力欄としてグループを作る */}
      <InputGroup
        size='md'
        position={"relative"}
        onClick={onOpen}
      >
        <InputLeftElement zIndex={1}>
          <ChakraFontAwesomeIcon
            icon={faMagnifyingGlass}
            display={'inline'}
            width={4}
            opacity={0.4}
          />
        </InputLeftElement>
        <Input
          type='text'
          focusBorderColor={STYLES.colorLight}
          onInput={handleInput}
          value={''}
        />
        <InputRightElement
          width={36}
          whiteSpace={"nowrap"}
          zIndex={1}
        >
            <Flex
              h={"full"}
              alignItems={"center"}
              opacity={0.4}
            >
              <Kbd>
                {`${actionKey[0]}(${actionKey[1]})`}
              </Kbd> + <Kbd>K</Kbd>
            </Flex>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default SearchFormControlInHeader

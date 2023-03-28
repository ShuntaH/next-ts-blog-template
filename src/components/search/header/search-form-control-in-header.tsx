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
import React, { FormEventHandler, useCallback, useMemo } from 'react'
import { STYLES } from 'lib/constants'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ChakraFontAwesomeIcon from 'components/foundations/chakra-font-awesome-icon'
import { useSearchModalDisclosure } from "../../../hooks/useSearchModalDisclosure";
import { useKeyboard } from "../../../hooks/useKeyboard";
import { useSearchInputContext } from "../../../contexts/searchInputContext";


interface Props {
  formControlProps?: FormControlProps
}

/**
 * ヘッダーの検索入力欄
 * @param formControlProps
 */
function SearchFormControlInHeader({ formControlProps }: Props) {
  const { onOpen } = useSearchModalDisclosure()
  const { actionKey } = useKeyboard()
  const { searchInput } = useSearchInputContext()

  const handleInput: FormEventHandler = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      e.preventDefault()
    }
    , [])

  /**
   * 入力欄の中のアイコンと文字が重ならないように文字数が多ければ3点リーダをつける
   */
  const trimSearchInput = useMemo(
    () => {
      const MAX_LENGTH = 8
      if (searchInput.length > MAX_LENGTH) {
        return searchInput.substring(0, MAX_LENGTH) + '...'
      }
      return searchInput
    }, [searchInput]
  )

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
          value={trimSearchInput}
          verticalAlign={'middle'}
          aria-label={'Full text search input form'}
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

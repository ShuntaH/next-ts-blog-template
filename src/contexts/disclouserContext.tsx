import React, { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'


interface DisclosureContextProps {
  id: string,
  hidden: boolean,
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  afterOpenRef: React.MutableRefObject<null | HTMLInputElement>
  afterCloseRef: React.MutableRefObject<null | HTMLInputElement>,
}

const DisclosureContext = createContext<DisclosureContextProps>({
      id: '',
      hidden: false,
      isOpen: false,
      onOpen: () => {},
      onClose: () => {},
      afterOpenRef: { current: null }, // モーダルが開いた後にフォーカスする要素
      afterCloseRef: { current: null } // モーダルが閉じた後にフォーカスする要素
    })


interface DisclosureProviderProps {
  children: React.ReactNode
}

/**
 * DisclosureProvider
 * Chakra UIのuseDisclosureを使って、Modalの開閉を管理する
 * @param children
 * @constructor
 */
export function DisclosureProvider ({ children }: DisclosureProviderProps) {
  const { isOpen, onOpen, onClose, getDisclosureProps } = useDisclosure()
  const disclosureProps = getDisclosureProps()
  const { hidden, id } = disclosureProps

  const disclosure: DisclosureContextProps = {
    afterOpenRef: React.useRef(null),
    afterCloseRef: React.useRef(null),
    isOpen,
    onOpen,
    onClose,
    id,
    hidden
  }
  return (
    <DisclosureContext.Provider value={disclosure}>
      {children}
    </DisclosureContext.Provider>
  )
}

export const useDisclosureContext = () => useContext(DisclosureContext)

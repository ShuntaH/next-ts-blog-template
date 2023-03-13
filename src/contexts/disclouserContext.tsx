import React, { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'

const DisclosureContext = createContext<{
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  afterOpenRef: React.MutableRefObject<null | HTMLInputElement>
  afterCloseRef: React.MutableRefObject<null | HTMLInputElement>
}>({
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
  const afterOpenRef = React.useRef(null)
  const afterCloseRef = React.useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const disclosure = { afterOpenRef, afterCloseRef, isOpen, onOpen, onClose }
  return (
    <DisclosureContext.Provider value={disclosure}>
      {children}
    </DisclosureContext.Provider>
  )
}

export const useDisclosureContext = () => useContext(DisclosureContext)

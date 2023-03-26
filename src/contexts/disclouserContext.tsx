import React, { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'


interface DisclosureContextProps {
  id: string | null,
  hidden: boolean,
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  afterOpenRef: React.MutableRefObject<null | HTMLInputElement>
  afterCloseRef: React.MutableRefObject<null | HTMLInputElement>
}

const DisclosureContext = createContext<DisclosureContextProps>({
  id: null,
  hidden: false,
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
  afterOpenRef: { current: null }, // モーダルが開いた後にフォーカスする要素
  afterCloseRef: { current: null }, // モーダルが閉じた後にフォーカスする要素
})


interface DisclosureProviderProps {
  children: React.ReactNode
}

export const useDisclosureContext = () => useContext(DisclosureContext)

/**
 * DisclosureProvider
 * Chakra UIのuseDisclosureを使って、Modalの開閉を管理する
 * @param children
 * @constructor
 */
export function DisclosureProvider({ children }: DisclosureProviderProps) {
  const afterOpenRef = React.useRef(null)
  const afterCloseRef = React.useRef(null)

  const disclosure = useDisclosure()
  const { isOpen, onOpen, onClose, getDisclosureProps, onToggle } = disclosure
  const { hidden, id } = getDisclosureProps()

  const value = {
    id,
    hidden,
    isOpen,
    onOpen,
    onClose,
    afterOpenRef,
    afterCloseRef,
    onToggle
  }

  // devLog([ 'DisclosureProvider ID', value.id, value ])

  return (
    <DisclosureContext.Provider value={value}>
      {children}
    </DisclosureContext.Provider>
  )
}

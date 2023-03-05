import React, { createContext, useContext } from 'react';
import { useDisclosure } from "@chakra-ui/react";

const DisclosureContext = createContext<{
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  modalRef: React.MutableRefObject<null | HTMLInputElement>
}>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  modalRef: { current: null }
})

type DisclosureProviderProps = {
  children: React.ReactNode
}

/**
 * DisclosureProvider
 * Chakra UIのuseDisclosureを使って、Modalの開閉を管理する
 * @param children
 * @constructor
 */
export function DisclosureProvider({ children }: DisclosureProviderProps) {
  const modalRef = React.useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const disclosure = { modalRef, isOpen, onOpen, onClose }
  return (
    <DisclosureContext.Provider value={disclosure}>
      {children}
    </DisclosureContext.Provider>
  )
}

export const useDisclosureContext = () => useContext(DisclosureContext)

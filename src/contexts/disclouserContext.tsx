import React, { createContext, useContext } from 'react'
import { useDisclosure } from '@chakra-ui/react'


interface DisclosureContextProps {
  id: string | null,
  hidden: boolean,
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  afterOpenRef: React.MutableRefObject<null | HTMLInputElement>
  afterCloseRef: React.MutableRefObject<null | HTMLInputElement>
}

const defaultDisclosureContext: () => DisclosureContextProps = () => {
  return {
    id: null,
    hidden: false,
    isOpen: false,
    onOpen: () => {
    },
    onClose: () => {
    },
    afterOpenRef: { current: null }, // モーダルが開いた後にフォーカスする要素
    afterCloseRef: { current: null }, // モーダルが閉じた後にフォーカスする要素
  }
}

const DisclosureContext = createContext<DisclosureContextProps>(defaultDisclosureContext())


interface DisclosureProviderProps {
  children: React.ReactNode
}

let disclosureId: string | undefined = undefined

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

  const disclosure = useDisclosure({ id: disclosureId })
  const { isOpen, onOpen, onClose, getDisclosureProps } = disclosure
  const { hidden, id } = getDisclosureProps()

  if (!disclosureId) {
    // 初期モーダルの場合は、idを保存する
    disclosureId = id
  }

  const value = {
    id,
    hidden,
    isOpen,
    onOpen,
    onClose,
    afterOpenRef,
    afterCloseRef,
  }

  // devLog([ 'DisclosureProvider ID', value.id, value ])

  return (
    <DisclosureContext.Provider value={value}>
      {children}
    </DisclosureContext.Provider>
  )
}

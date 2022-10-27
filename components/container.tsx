type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5">containerの始め:children{children}containerの終わり</div>
}

export default Container

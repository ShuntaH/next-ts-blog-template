type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5">
    <p style={{color: "red"}}>containerの始め ここからchildren</p>
    {children}
    <p style={{color: "red"}}> containerの終わり ここまでchildren</p>
  </div>
}

export default Container

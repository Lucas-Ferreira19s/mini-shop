import { useState } from "react"
import { Header } from "./components/header"
import { LayoutMain } from "./components/layout"

const App = ()=>{
  const [score, setScore] = useState(0)

  return(
    <>
      <Header times={score} amount={setScore}/>
      <LayoutMain amount={setScore}/>
    </>
  )
}

export default App
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div onClick={() => setCount((prev) => prev++)}>
        This is an application {count}
      </div>
    </>
  )
}

export default App

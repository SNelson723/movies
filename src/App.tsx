import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='rounded-md border border-white text-center p-2'>
        This is an application {count}
        <button onClick={() => setCount((prev) => prev + 1)}>Click</button>
      </div>
    </>
  )
}

export default App;

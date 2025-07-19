import AppLayout from "./Layout/AppLayout"
import Router from "./Layout/Router"


function App() {

  return (
    <AppLayout children={<Router />} />
  )
}

export default App

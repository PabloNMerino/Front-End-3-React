
import './App.css'
import Card from './Card'

function App() {

  return (
    <div>
      <Card>
        <span>card children</span>
      </Card>
      <Card title='card title'>
        <span>card children</span>
      </Card>
      <Card footer='card footer'>
        <span>card children</span>
      </Card>
      <Card title='card title' footer='card footer'>
        <span>card children</span>
      </Card>
    </div>
  )
}

export default App

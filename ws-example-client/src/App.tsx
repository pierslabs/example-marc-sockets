// App.js (o cualquier otro componente)

import ChartExample1 from './components/chartExample1';
import ChartExample2 from './components/chartExample2';
import { WebSocketProvider } from './context/websocket.context';

function App() {
  return (
    <WebSocketProvider>
      <div className='App'>
        <h1>WebSocket Data</h1>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10rem',
            justifyContent: 'center',
          }}
        >
          <ChartExample1 />
          <ChartExample2 />
        </div>
      </div>
    </WebSocketProvider>
  );
}

export default App;

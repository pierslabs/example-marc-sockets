import { memo, useContext, useEffect, useRef } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { WebSocketContext } from '../context/websocket.context';

const ChartExample2: React.FC = () => {
  const { data2 } = useContext(WebSocketContext);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  }, [data2]);

  return (
    <div>
      <BarChart width={400} height={400} data={data2 || []}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Bar dataKey='uv' fill='#8884d8' />
      </BarChart>
      <p>me he renderizado {renderCount.current} </p>
    </div>
  );
};

export default memo(ChartExample2);

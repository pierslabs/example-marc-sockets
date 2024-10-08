import { memo, useContext, useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { WebSocketContext } from '../context/websocket.context';

function ChartExample1() {
  const { data } = useContext(WebSocketContext);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <ResponsiveContainer width='30%' height={400}>
      <LineChart data={data || []}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='pv' stroke='#8884d8' />
        <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
      </LineChart>
      <p>me he renderizado {renderCount.current}</p>
    </ResponsiveContainer>
  );
}

export default memo(ChartExample1);

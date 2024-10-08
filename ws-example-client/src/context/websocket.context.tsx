import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  FC,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { io, Socket } from 'socket.io-client';

export interface Data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface WebSocketContextType {
  data: Data[];
  data2: Data[];
}

export const WebSocketContext = createContext({} as WebSocketContextType);

export const WebSocketProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Data[]>([]);
  const [data2, setData2] = useState<Data[]>([]);

  const handleData = useCallback((newData: { content: Data[] }) => {
    setData(newData.content);
  }, []);

  const handleData2 = useCallback((newData: { content: Data[] }) => {
    setData2(newData.content);
  }, []);

  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io('ws://localhost:3000');

    socket.current.on('connect_error', (err) => {
      console.error('Connection Error:', err.message);
    });

    socket.current.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.current?.on('newData', (newData: { content: Data[] }) => {
      handleData(newData);
    });

    socket.current?.on('newData2', (newData: { content: Data[] }) => {
      console.log('New data received from server:', newData);
      handleData2(newData);
    });

    return () => {
      socket.current?.off('newData');
      socket.current?.off('newData2');
    };
  }, [handleData, handleData2]);

  const values = useMemo(() => ({ data, data2 }), [data, data2]);

  return (
    <WebSocketContext.Provider value={values}>
      {children}
    </WebSocketContext.Provider>
  );
};

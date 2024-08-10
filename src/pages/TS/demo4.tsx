import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';


interface Idata {
  code: number;
  message: string;
  data: any;
}

interface ILoopApiParams {
  blockId: string;
}

interface IApi {
  (params: ILoopApiParams): Promise<Idata>;
}

function useTimeoutApi(api:IApi, timer:number) {
  const [loopLoading, setLoading] = useState<boolean>(true);
  const [loopData, setLoopData] = useState<any[]>([]);
  const [updateTime, setUpdateTime] = useState<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const timeRef = useRef<number | null>(null);

  // 组件销毁时清除定时器
  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
      }
    }
  },[]);

  const loopApi = (params: ILoopApiParams) => {
    setUpdateTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    api(params).then((res) => {
      setLoading(false);
      setLoopData(res.data);
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    }).finally(() => {
      setLoading(false);
    });
  };

  const startLoop = (params:ILoopApiParams) => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    timeRef.current = window.setInterval(() => {
      loopApi(params)
    }, timer);
    loopApi(params);
  };

  const stopLoop = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
  }

	return { loopData, loopLoading, startLoop, updateTime, stopLoop }
}

export default useTimeoutApi;
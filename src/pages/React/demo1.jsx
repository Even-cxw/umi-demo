import { useEffect, useMemo } from "react";
import G6 from "@antv/g6";
import { Link } from "umi";
import { Button, Collapse, Row, Col } from "antd";

export default function HomePage() {

  const items = [
    {
      key: "1",
      label: "useMemo",
      children: (
        <>
          <p>概念：它在每次重新渲染的时候能够 <span style={{color: 'red'}}>缓存计算的结果</span></p>
          <p>应用场景一: 跳过重复计算</p>
          <p>应用场景二: 跳过组件重复渲染</p>
          <p>注意⚠️ 如果是*静态的元素*就没要使用</p>
        </>
    )
    },
    {
      key: "2",
      label: "useState",
      children: (<>
        <p>概念：为组件添加状态变量 *React 只在初次渲染时保存初始状态，后续渲染时将其忽略*</p>
        <p>应用场景一: 为组件添加状态</p>
        <p>应用场景二: 根据先前state更新state - 如何获取待定*状态*</p>
        <p>应用场景三：更新数组对象等</p>
        <p>应用场景四: setState() 传递Fn 避免每次渲染*重复执行*</p>
        <p>应用场景五: 使用 key 重置状态</p>
      </>),
    },
    {
      key: "3",
      label: "useRef",
      children: (<>
        <p>概念：引用<span style={{color: 'red'}}>渲染不需要</span>的值</p>
        <p>场景一：引用值， 参与<span style={{color: 'red'}}>计算后渲染识图</span>不受影响 =》 比如 aler等</p>
        <p>场景二：引用dom，</p>
        <p> 1、引用dom, 如何在自定义组件上获取DOM</p>
        <p> 2、引用dom，如何在自定义组件上获取内部input</p>
        <p> 3、引用dom，避免重新创建</p>
      </>),
    },
    {
      key: '4',
      label: 'useCallback',
      children: (
        <>
          <p>概念：重新渲染之间缓存函数定义</p>
          <p>场景一：跳过组件的重新渲染 =》 组件重新渲染之间缓存函数</p>
        </>
      )
    }
  ];


  return (
    <div className="h-full flex items-center justify-center">
      <div style={{color: '#1722a7'}}>默认情况下，当一个组件重新渲染时，React 会递归地重新渲染它的所有子组件。</div>
      <Row>
        <Col span={12}>
          <Collapse items={items}/>
        </Col>
      </Row>
    </div>
  );
}

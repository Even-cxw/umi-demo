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
          <p>应用场景1: 跳过重复计算</p>
          <p>应用场景2: 跳过组件重复渲染</p>
          <p>注意⚠️ 如果是*静态的元素*就没要使用</p>
        </>
    )
    },
    {
      key: "2",
      label: "useState",
      children: (<>
        <p>概念：为组件添加状态变量 *React 只在初次渲染时保存初始状态，后续渲染时将其忽略*</p>
        <p>应用场景1: 为组件添加状态</p>
        <p>应用场景2: 根据先前state更新state - 如何获取待定*状态*</p>
        <p>应用场景3：更新数组对象等</p>
        <p>应用场景4: setState() 传递Fn 避免每次渲染*重复执行*</p>
        <p>应用场景5: 使用 key 重置状态</p>
      </>),
    },
    {
      key: "3",
      label: "TS",
      children: (<p>333</p>),
    },
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

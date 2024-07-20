import { useEffect, useMemo } from "react";
import yayJpg from "../assets/yay.jpg";
import G6 from "@antv/g6";
import { Link } from "umi";
import { Button, Collapse, Row, Col } from "antd";

export default function HomePage() {
  let a = ["上海", "奥体", "东方", "南京"];
  let b = ["北京奥体中心", "长春东方体育中心", "南京证券", "浦东上海"];
  /**
   * @desc前端合并srcDcList
   * @desc俩个数组 如果包含关系进行合并，如果不是包含关系，自动补充
   * @desc编写实验方法
   */

  const fff = (name) => {
    let aaa = a.find((item) => name.indexOf(item) >= 1);
    console.log("aaa", aaa);
  };

  useEffect(() => {
    fff("2018-02-18 13:00:00");
  }, []);

  // 链路查看 padding: 5px 0

  // useEffect(() => {
  //   let c = b.reduce((accumulator, currentValue) => {
  //     let newArr = [...accumulator]
  //     for (let aItem of a) {
  //       if (currentValue.indexOf(aItem) >=1) {
  //         newArr.push(aItem)
  //       }
  //     }
  //     if (newArr.toString() === accumulator.toString()) {
  //       return [...newArr, currentValue]
  //     } else {
  //       return newArr
  //     }
  //   }, [])
  //   console.log('c', c)
  // }, [])

  const handleUndefined = (value) => {
    if (value === undefined) return "";
    if (value === null) return "";
    return value;
  };

  const items = [
    {
      key: "1",
      label: "antv",
      children: (
        <Row>
          <Col span={8}>
            <Link to="/docs">
              <Button type="dashed">docs</Button>
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo1">
              <Button type="dashed">antv-demo1</Button> 修改canvas整体画布颜色
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo2">
              <Button type="dashed">antv-demo2</Button> 树布局
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo3">
              <Button type="dashed">antv-demo3</Button> 自定义交互事件mode
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo4">
              <Button type="dashed">antv-demo4</Button> 基础事件
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo5">
              <Button type="dashed">antv-demo5</Button>{" "}
              流水线子图布局：实现公司布局要求
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo6">
              <Button type="dashed">antv-demo6</Button> 自定义节点
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo7">
              <Button type="dashed">antv-demo7</Button> 自定义节点动画
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo8">
              <Button type="dashed">antv-demo8</Button> 自定边基础配置
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo9">
              <Button type="dashed">antv-demo9</Button> 设置边的背景
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo10">
              <Button type="dashed">antv-demo10</Button> 节点中心进行连线 + 边动画效果
            </Link>
          </Col>
          <Col span={8}>
            <Link to="/Antv/demo11">
              <Button type="dashed">antv-demo11</Button> 添加边的“透明-渐变色”
            </Link>
          </Col>
          <Col span={24}>
            <Link to="/Antv/demo12">
              <Button type="dashed">antv-demo12</Button>
              多个节点之间连线使用G6.Util.processParallelEdges(data.edges);
              *注意⚠️*会导致动画消失
            </Link>
          </Col>
        </Row>
      )
    },
    {
      key: "2",
      label: "React",
      children: (
        <Row>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
          <Col span={8}>
            <Link to="/React/demo1"><Button type="dashed">hooks</Button></Link>
          </Col>
        </Row>
      ),
    },
    {
      key: "3",
      label: "TS",
      children: (
        <Row>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
      ),
    },
  ];


  return (
    <div className="h-full flex items-center justify-center">
      <Collapse items={items} defaultActiveKey={["1"]} />;
    </div>
  );
}

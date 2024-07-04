import { useEffect } from 'react';
import yayJpg from '../assets/yay.jpg';
import G6 from '@antv/g6';
import {Link} from 'umi';
import {Button} from 'antd';

export default function HomePage() {

  
  let a = ['上海', '奥体', '东方', '南京', ]
  let b = ['北京奥体中心', '长春东方体育中心', '南京证券', '浦东上海']
  /**
   * @desc前端合并srcDcList
   * @desc俩个数组 如果包含关系进行合并，如果不是包含关系，自动补充
   * @desc编写实验方法
   */

  const fff = (name) => {
    let aaa =  a.find(item => name.indexOf(item) >=1)
    console.log('aaa', aaa);
  }

  useEffect(() => {
    fff('2018-02-18 13:00:00')
  }, [])

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
    if (value === undefined) return ''
    if (value === null) return ''
    return value
  }


  return (
    <div className='h-full flex items-center justify-center'>
      <Link to="/docs">
        <Button type="dashed">docs</Button>
      </Link>
      <br></br>
      <Link to="/Antv/demo1">
        <Button type="dashed">antv-demo1</Button>  修改canvas整体画布颜色
      </Link>
      <br></br>
      <Link to="/Antv/demo2">
        <Button type="dashed">antv-demo2</Button> 树布局
      </Link>
      <br></br>
      <Link to="/Antv/demo3">
        <Button type="dashed">antv-demo3</Button> 自定义交互事件mode
      </Link>
      <br></br>
      <Link to="/Antv/demo4">
        <Button type="dashed">antv-demo4</Button> 基础事件
      </Link>
      <br></br>
      <Link to="/Antv/demo5">
        <Button type="dashed">antv-demo5</Button> 流水线子图布局：实现公司布局要求
      </Link>
      <br></br>
      <Link to="/Antv/demo6">
        <Button type="dashed">antv-demo6</Button> 自定义节点
      </Link>
      <br></br>
      <Link to="/Antv/demo7">
        <Button type="dashed">antv-demo7</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo8">
        <Button type="dashed">antv-demo8</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo9">
        <Button type="dashed">antv-demo9</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo10">
        <Button type="dashed">antv-demo10</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo6">
        <Button type="dashed">antv-demo6</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo11">
        <Button type="dashed">antv-demo11</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo12">
        <Button type="dashed">antv-demo12</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo13">
        <Button type="dashed">antv-demo13</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo14">
        <Button type="dashed">antv-demo14</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo15">
        <Button type="dashed">antv-demo15</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo16">
        <Button type="dashed">antv-demo16</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo17">
        <Button type="dashed">antv-demo17</Button> 
      </Link>
      <br></br>
      <Link to="/Antv/demo18">
        <Button type="dashed">antv-demo18</Button> 
      </Link>
    </div>
  );
}

//虚拟DOM元素的类,构建实例对象,用来描述DOM
class Element{
    constructor(type,props,children){
        this.type = type;
        this.props = props;
        this.children = children;
    }
}
//创建虚拟DOM 以后可以代替真实DOM 提高网页性能
function createElement(type,props,children){
    return new Element(type,props,children);
}
//reactDOM.render
//react16之前 组件用class来做的 class Todos extends React.Component{
// render()
//  <ul>
//
// </ul>
// }
//将虚拟DOM对象转变成为真实DOM
function render(domObj){
    //Element ->DOM
    // console.log(domObj);
    let el = document.createElement(domObj.type);
    for (const key in domObj.props) {
        el.setAttribute(key,domObj.props[key]);
    }
    //JSX -> VD 正则
    domObj.children.forEach(child => {
        child = (child instanceof Element)
        ?render(child)
        :document.createTextNode(child)
        el.appendChild(child);
    });
    return el;
}
  
export {
    createElement,
    Element,
    render
}
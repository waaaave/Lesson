// const element = React.createElement(
//     'h1',
//     { title: 'foo' },
//     "Hello"
// )

function createElement(type, props, ...children) {
  return {
      type,
      props: {
          ...props,
          children: children.map(child => 
              typeof child === 'object'
              ? child
              : createTextElement(child))
      }
  }
}

function createTextElement(text) {
  return {
      type: "TEXT_ELEMENT",
      props: {
          nodeValue: text,
          children: []
      }
  }
} 

const Didact = {
  createElement
}

// const element = {
//     type: 'h1',
//     props: {
//         title: 'foo',
//         children: 'hello'
//     }
// }
// {
//     type: 'div',
//     props: {
//         id: foo,
//         {
//             type: 'a',
//             props: {
//                 children: ['bar']
//             }
//         },
//         {
//             type: 'b'
//         }
//     }
// }
const element = Didact.createElement(
  "div",
  {id: "foo"},
  Didact.createElement('a', null, "bar"),
  Didact.createElement('b')
)
// const element = <h1 title="foo" className="item">Hello</h1>;
const container = document.getElementById('root');
// ReactDOM.render(element, container);
// const node = document.createElement(element.type);
// node["title"] = element.props.title
// const text = document.createTextNode("")
// text['nodeValue'] = element.props.children

// node.appendChild(text)
// container.appendChild(node)

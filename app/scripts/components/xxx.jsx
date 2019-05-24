import React from 'react'


export const withRed = Component => props =>

      <div className='cn'>
        Content 1!
        <br />
        Content 2!
      </div>


const js =

      React.createElement(
        'div',
        { className: 'cn' },
        'Content 1!',              // 1st child
        React.createElement('br'), // 2nd child
        'Content 2!'               // 3rd child
      )


const vdom =

    {
      type: 'div',
      props: {
        className: 'cn',
        children: [
          'Content 1!',
          {
            type: 'br',
            props: { children: [] }
          },
          'Content 2!'
        ]
      }
    }


    const C1 = props => <div className="c1">Hi {props.hi}</div>
    const C2 = props => <div className="c2">Hi {props.hi}</div>
    const C3 = () => <div className="c3">
        Hi C3
        <C2 hi="c2" />
      </div>

    const wrapper = () =>
        <div>
          Hi div
          <C1 hi="c1" />
          <C3 />
        </div>


wrapper()

const js2 =

  React.createElement(
    'div',
    'Hi div',                            // 1st child
    React.createElement(C1, {hi: 'c1'}), // 2nd child
    React.createElement(C3)              // 3rd child
  )

const vdom2 =

  {
    type: 'div',
    props: {
      children: [
        'Hi div',
        {
          type: C1,
          props: { hi: 'c1' }
        },
        {
          type: C3,
          props: {}
        }
      ]
    }
  }

  const Component = () => null
  const Component2 = () => null
const deleteItem = null

const goodRendering = () => {

  const item = {id: 1, name: 'some name', age: 30}
  return <div>
    <button onClick={e => deleteItem()}>delete</button>

  </div>

}

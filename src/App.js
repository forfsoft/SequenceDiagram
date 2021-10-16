import React from 'react';
import './App.css';
import SequenceDiagram from './SequenceDiagram/Root'

function App() {

  const elements = [
    { id: 'User1-Start', type: 'input', data: { label: 'User1' }, position: { x: 100, y: 10 } },
    { id: 'User1-End', type: 'output', data: { label: 'User1' }, position: { x: 100, y: 300 } },
    { id: 'User1-Edge', source: 'User1-Start', target: 'User1-End' },

    { id: 'User2-Start', type: 'input', data: { label: 'User2' }, position: { x: 300, y: 10 } },
    { id: 'User2-End', type: 'output', data: { label: 'User2' }, position: { x: 300, y: 300 } },
    { id: 'User2-Edge', source: 'User2-Start', target: 'User2-End' },
  
    { id: 'User1-Send-1', source: 'User1-Start', target: 'User2-Start', type: 'offsetedge', arrowHeadType: 'arrowclosed', data: { offsetY:50, label: <>attack<tspan fill="red">First tspan</tspan><tspan fill="green" y="15">First tspan</tspan>98</> }, animated: true },
    { id: 'User1-Send-3', source: 'User1-Start', target: 'User2-Start', type: 'offsetedge', arrowHeadType: 'arrowclosed', data: { offsetY:110, label: 'attack 112' }, animated: true },
    { id: 'User1-Send-2', source: 'User1-Start', target: 'User2-Start', type: 'offsetedge', arrowHeadType: 'arrowclosed', data: { offsetY:160, label: 'attack 95' }, animated: true },

    { id: 'User2-Send-1', source: 'User2-Start', target: 'User1-Start', type: 'offsetedge', arrowHeadType: 'arrowclosed', data: { offsetY:80, label: 'attack 34' }, animated: true },
  ];
  //{ id: 'User1-End', data: { label: <a href='http://www.naver.com'>Node 2</a> }, position: { x: 100, y: 100 } },
  //{ id: 'User1-Edge', source: 'User1-Start', target: 'User1-End', type: 'offsetedge', data: { offsetX: -10, offsetY:-10, textOffsetY:-5, label: <a href='http://www.naver.com'>naver</a> }, animated: true },
  return (
    <div className="App">
      <SequenceDiagram elements={elements} />
    </div>
  );
}

export default App;

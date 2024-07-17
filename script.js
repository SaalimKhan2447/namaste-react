const parent=React.createElement('div',{class:'parent'},
    [React.createElement('div',{class:'child'},[
    React.createElement('h1',{},'iam an h1 tag'),
    React.createElement('h2',{},'iam an h2 tag')
   ]),
   React.createElement('div',{class:'child2'},
   [React.createElement('h1',{},'h1 heading'),
    React.createElement('h2',[],'h2 heading')
   ]),
 ]);




// const heading=React.createElement("h1",{class:"heading"},"hello world");
const root=ReactDOM.createRoot(document.querySelector('.root'));
root.render(parent);
console.log(parent);
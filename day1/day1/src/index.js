import ReactDom from 'react-dom/client';
import App from './App';

// import { Component } from 'react';
let root = ReactDom.createRoot(document.getElementById('root'))
//Element [HTML]
//JSX
// import ReactDom from 'react-dom/client';
// import { Component } from 'react';
// import App from './App';
// import './style.css';
// let root = ReactDom.createRoot(document.getElementById('root'))
// let element = <h1>Hello World</h1>;
// // ReactDom.render(element,document.getElementById('root'))
// root.render(element);

// let element2 = <h1>Welcome</h1>;
// root.render(element2);

// let name = "Ahmed";
// let Styles = {
//     style1:{
//         backgroundColor:'red',
//         textAlign:'right',
//         color:'blue'
//     },
//     style2:{
//         backgroundColor:'blue',
//         textAlign:'center',
//         color:'yellow'
//     },
// }

// let element = (<div>
//                 <h1>Hello World</h1>
//                 <h1>Welcome</h1>
//                 <input readOnly style={{color:'gray'}} type='text' value={name}/>
//                 <input readOnly style={Styles.style1} type='text' value={name}/>
//                 <input readOnly style={Styles.style2} type='text' value={name}/>
//                 <input readOnly className='myClass' type='text' value={name}/>
//                 <input 
//                     type='text' 
//                     value={name} 
//                     onChange={
//                         (e)=>{
//                             console.log(e.target.value)
//                             // root.render(element);
//                         }
//                     }
//                 />
//               </div>);
// root.render(element);

/**
 * Functional Component [Stateless Component] [Has No State] [Hooks==>Suport State]
        *function Hamada(){let x = 10; return(<div></div)} 
 * Class Component [Statfull Component] [Has State]
        *class Hamada2{x=10;render(){return(<div></div)}}  
 */

// function ElementsFunctional(){
//     let name = "Ahmed";
//     let Styles = {
//         style1:{
//             backgroundColor:'red',
//             textAlign:'right',
//             color:'blue'
//         },
//         style2:{
//             backgroundColor:'blue',
//             textAlign:'center',
//             color:'yellow'
//         },
//     }
//     return(
//         <div>
//                 <h1>Hello World</h1>
//                 <h1>Welcome</h1>
//                 <input readOnly style={{color:'gray'}} type='text' value={name}/>
//                 <input readOnly style={Styles.style1} type='text' value={name}/>
//                 <input readOnly style={Styles.style2} type='text' value={name}/>
//                 <input readOnly className='myClass' type='text' value={name}/>
//                 <input 
//                     type='text' 
//                     value={name} 
//                     onChange={
//                         (e)=>{
//                             console.log(e.target.value)
//                             // root.render(element);
//                         }
//                     }
//                 />
//               </div>
//     )
// }
// root.render(<ElementsFunctional/>)


// class ElementsClass extends Component{
//     //name = "Ahmed";
//     Styles = {
//         style1:{
//             backgroundColor:'red',
//             textAlign:'right',
//             color:'blue'
//         },
//         style2:{
//             backgroundColor:'blue',
//             textAlign:'center',
//             color:'yellow'
//         },
//     }
//     constructor(){
//         super();
//         this.state = {
//             name:""
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello World</h1>
//                 <h1>Welcome</h1>
//                 <input readOnly style={{color:'gray'}} type='text' value={this.state.name}/>
//                 <input readOnly style={this.Styles.style1} type='text' value={this.state.name}/>
//                 <input readOnly style={this.Styles.style2} type='text' value={this.state.name}/>
//                 <input readOnly className='myClass' type='text' value={this.state.name}/>
//                 <input 
//                     type='text' 
//                     value={this.state.name} 
//                     onChange={
//                         (e)=>{
//                             // console.log(e.target.value)
//                             // this.state.name = e.target.value;
//                             // root.render(element);
//                             this.setState({name:e.target.value})
//                         }
//                     }
//                 />
//               </div>
//         )
//     }
// }

// root.render(<ElementsClass/>)
root.render(<App/>);
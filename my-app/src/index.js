import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Welcome';
import Project from './Project';
import Form from './Form';

/*
// Erster Output :: Test1 :: Cross- Site- Scripting safe
const xss =<script>console.log(123)</script>;
const element = <h1>Hello React {xxs}</h1>;
ReactDOM.render(element, document.getElementById('root'));
*/

/*
// Rendering und Virtualer DOM :: Test2 :: Jedes Tag wird aktualisiert, no go bei großen Applikationen

function renderingWithoutReact(){
    const html = [
        '<h1>Hello World</h1>',
        `<h2>Sekunden = {new Date().getSeconds()}</h2>`
            ];
    document.getElementById('root').innerHTML = html.join('');
}
*/

/*
// Rendering und Virtualer DOM  Test3 :: Nur ein Tag wird aktualisiert
function renderingWithReact(){
    const html = (
        <div>
        <h1>Hello World</h1>
        <h2>Sekunden = {new Date().getSeconds()}</h2>
        </div>
        );
    ReactDOM.render(html, document.getElementById('root'));
}
setInterval(renderingWithReact ,1000);
*/


/*
// Comonent :: Test 4 :: component
function Welcome(props){
return <h1>first component {props.firstname} {props.lastname}</h1>
}
*/

ReactDOM.render(
    <div><Welcome firstname="Daniel" lastname="Sydow"/><Project/><Form/></div>,
    document.getElementById('root'));




import React from 'react';
import './App.css';
function App() {
  return (
    <div>
      <div style={{fontSize:"45px",textAlign:"center"}}>React Tasks</div>
      <center>
      <table id="id1">
        <tr>
          <td style={{width:"150px"}}>S.No</td>
          <td style={{width:"600px"}}>Title</td>
          <td style={{width:"300px"}}>Git Repository</td>
          <td style={{width:"400px"}}>Link</td>
        </tr>
        <tr id="id">
          <td>1</td>
          <td>Paragraph Word Counter</td>
          <td><a href="https://github.com/artabhiram/react_task-1">React Task-1</a></td>
          <td><a href="https://react-task-1-u1op.vercel.app/">Word Counter</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Calculator</td>
          <td><a href="https://github.com/artabhiram/react_task-2">React Task-2</a></td>
          <td><a href="https://react-task-2-e.vercel.app/">Calculator</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Color Picker</td>
          <td><a href="https://github.com/artabhiram/react_task-3">React Task-3</a></td>
          <td><a href="https://react-task-3-taupe-nu.vercel.app/">Color Picker</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td>API Fetch</td>
          <td><a href="https://github.com/artabhiram/react_task-4">React Task-4</a></td>
          <td><a href="https://react-task-4-lime-beta.vercel.app/">API Fetching</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Age Calculator</td>
          <td><a href="https://github.com/artabhiram/react_task-5">React Task-5</a></td>
          <td><a href="https://react-task-5-rouge.vercel.app/">Age Calculator</a></td>
        </tr>
        <tr>
          <td>6</td>
          <td>PortFolio</td>
          <td><a href="https://github.com/artabhiram/react_task-6-">React Task-6</a></td>
          <td><a href="https://react-task-6-olive.vercel.app/">Portfolio</a></td>
        </tr>
      </table>
      </center>
    </div>
  );
}
export default App;
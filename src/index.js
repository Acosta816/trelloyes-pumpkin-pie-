import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './store';
import Accordian from './state-drills/Accordian';

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

ReactDOM.render( <Accordian sectionsProp={sections}/> , document.getElementById('root'));
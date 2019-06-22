import React from 'react';
import renderer from 'react-test-renderer';
import '../components/shop-header/shop-header.css';
import { NavLink } from 'react-router-dom';
import ShopHeader from '../components/shop-header/shop-header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const num = 10;
const orderTotal = 1000;
const numItems = 10;
const total = 1000;
test('работа ShopHeader', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <BrowserRouter>
      <Switch>
            <ShopHeader numItems={num} total={orderTotal} >        
            </ShopHeader>
      </Switch>
    </BrowserRouter>
    
    
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

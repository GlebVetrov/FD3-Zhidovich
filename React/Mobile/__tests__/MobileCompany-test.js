"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import clients from '../clients';
import MobileCompany from '../components/MobileCompany';

test('работа MobileCompany', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany  clients={clients}/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  const buttonAll = component.root.find( el => el.type=='button' && el.props.value == 'all' );
  const buttonActive = component.root.find( el => el.type=='button' && el.props.value == 'active' ); 
  const buttonBlock = component.root.find( el => el.type=='button' && el.props.value == 'block' );
  const buttonAdd = component.root.find( el => el.type=='button' && el.props.value == 'add' );
  // const buttonEdit = component.root.find( el => el.type=='button' && el.props.value == 'edit1' );
  // const buttonDelete = component.root.find( el => el.type=='button' && el.props.value == 'delete1' );
    
  // и "нажмём" на неё
  buttonAll.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonAll.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonActive.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  buttonActive.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonBlock.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonBlock.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonAll.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  buttonAdd.props.onClick();

  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  

  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});

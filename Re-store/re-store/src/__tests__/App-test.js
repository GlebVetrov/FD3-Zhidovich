"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import App from '../components/app/';

test('работа MobileClients', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <App/>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // // найдём в вёрстке компонента саму кнопку
  // const buttonEdit = component.root.find( el => el.type=='button' && el.props.value == 'edit1' );
  // const buttonDelete = component.root.find( el => el.type=='button' && el.props.value == 'delete1' );
      
  // // и "нажмём" на неё
  // buttonEdit.props.onClick();

  // // получаем уже изменённый снэпшот
  // componentTree=component.toJSON();
  // expect(componentTree).toMatchSnapshot();

  // buttonDelete.props.onClick();

  // // получаем уже изменённый снэпшот
  // componentTree=component.toJSON();
  // expect(componentTree).toMatchSnapshot();

  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});

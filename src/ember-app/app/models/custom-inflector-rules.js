import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('владелец', 'Владелецs');
inflector.irregular('робот', 'Роботs');

export default {};

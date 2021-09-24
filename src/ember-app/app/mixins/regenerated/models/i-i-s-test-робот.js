import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  владелец: DS.belongsTo('i-i-s-test-владелец', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test-робот.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  владелец: {
    descriptionKey: 'models.i-i-s-test-робот.validations.владелец.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Робот', 'i-i-s-test-робот', {
    имя: attr('', { index: 0 }),
    владелец: belongsTo('i-i-s-test-владелец', '', {
      наименование: attr('', { index: 2 })
    }, { index: 1 })
  });

  modelClass.defineProjection('РоботE', 'i-i-s-test-робот', {
    имя: attr('Имя', { index: 0 }),
    владелец: belongsTo('i-i-s-test-владелец', 'Владелец', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('РоботL', 'i-i-s-test-робот', {
    имя: attr('Имя', { index: 0 }),
    владелец: belongsTo('i-i-s-test-владелец', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};

import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-test-владелец.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВладелецE', 'i-i-s-test-владелец', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ВладелецL', 'i-i-s-test-владелец', {
    наименование: attr('', { index: 0 })
  });
};

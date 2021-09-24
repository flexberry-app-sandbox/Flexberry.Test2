import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestВладелецLForm from './forms/i-i-s-test-владелец-l';
import IISTestРоботLForm from './forms/i-i-s-test-робот-l';
import IISTestВладелецEForm from './forms/i-i-s-test-владелец-e';
import IISTestРоботEForm from './forms/i-i-s-test-робот-e';
import IISTestВладелецModel from './models/i-i-s-test-владелец';
import IISTestРоботModel from './models/i-i-s-test-робот';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-владелец': IISTestВладелецModel,
    'i-i-s-test-робот': IISTestРоботModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'test',
          title: 'test',
          'i-i-s-test-робот-l': {
            caption: 'i-i-s-test-робот-l',
            title: 'i-i-s-test-робот-l'
          },
          'i-i-s-test-владелец-l': {
            caption: 'i-i-s-test-владелец-l',
            title: 'i-i-s-test-владелец-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-владелец-l': IISTestВладелецLForm,
    'i-i-s-test-робот-l': IISTestРоботLForm,
    'i-i-s-test-владелец-e': IISTestВладелецEForm,
    'i-i-s-test-робот-e': IISTestРоботEForm
  },

});

export default translations;

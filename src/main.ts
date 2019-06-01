import translate from './api/main';

translate('fuck').then(value => {
  console.log(...value);
})
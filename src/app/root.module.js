import '../sass/styles.scss';
import angular from 'angular';
import RootComponent from './root.component';

/**
 * @ngdoc module
 * @name root
 *
 * @description
 *
 * This is the root module
 *
 **/
const RootModule = angular
  .module('root', [
  ])
  .component('root', RootComponent);

export default RootModule;

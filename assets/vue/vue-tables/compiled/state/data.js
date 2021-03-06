'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (useVuex, source) {

  if (useVuex) return {
    vuex: true,
    activeState: false
  };

  var data = {
    vuex: false,
    activeState: false,
    count: 0,
    customQueries: {},
    query: null,
    page: 1,
    limit: 10,
    windowWidth: window.innerWidth,
    orderBy: {
      column: 'id',
      ascending: true
    }
  };

  if (source == 'server') data.data = [];

  return data;
};
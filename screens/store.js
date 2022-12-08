import React from 'react';
import { createStore } from 'state-pool';

const store = createStore();

store.setState("addBob", '');
store.setState("addRomuald", '');


export default store;
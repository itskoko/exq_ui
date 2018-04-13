import Ember from 'ember';

export function formatJson([params]) {
  return JSON.stringify(params[0]);
}

export default Ember.Helper.helper(formatJson);

'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  let current = state;

  for (const act of actions) {
    if (act.type === 'clear') {
      current = {};
    }

    if (act.type === 'addProperties') {
      current = { ...current, ...act.extraData };
    }

    if (act.type === 'removeProperties') {
      current = { ...current };

      for (const key of act.keysToRemove) {
        delete current[key];
      }
    }
    states.push(current);
  }

  return states;
}

module.exports = transformStateWithClones;

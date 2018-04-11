export const compose =
  (...functions) =>
    (...args) =>
      functions
        .slice(1)
        .reduce(
          (x, f) => f(x),
          functions[0](...args)
        );

export const maybe =
  object =>
    (path, dvalue = x => x) =>
      object[path] || dvalue;

export const ReducerFactory =
  (dstate, actions) =>
    (state = dstate, action = {}) =>
      maybe(actions)(action.type, x => x)(state, action);

export const Assing =
  (object, ...objects) =>
    Object.assign({}, object, ...objects);
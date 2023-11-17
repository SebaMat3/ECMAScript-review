// Instancing a Set on a variable.
const list = new Set()

// Applying add -> new values to the Set (list).
list.add('let-const');
list.add('arrow-functions');

// Possibility to add multiple values in a row.
list.add('generators').add('classes').add('template-literals').add('promises').add('default-params');
list.add('structuring-assignations').add('rest&spread-operators').add('modules');
console.log(list);


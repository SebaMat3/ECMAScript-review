// Instancing a Set on a variable.
const list = new Set()

// Applying add -> new values to the Set (list).
list.add('let-const');
list.add('arrow-functions');

// Possibility to add multiple values in a row.
list.add('generators').add('classes').add('template-literals').add('promises').add('default-params');
list.add('structuring-assignations').add('rest&spread-operators').add('modules');
console.log(list);

// Other useful Set methods.
const set = new Set(); set.add('item 1');                  	
// Set ['item 1'] 

set.add('item 2').add('item 3'); 
// Set ['item 1','item 2','item 3'] 

set.has('item 2');                 
// true 

set.delete('item 1');             
// Set ['item 2','item 3']    

set.size();                    
// 2`


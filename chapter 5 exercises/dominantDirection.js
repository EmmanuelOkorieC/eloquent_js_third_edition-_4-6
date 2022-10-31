 function characterScript(code) {
  for (let script of SCRIPTS) {
  if (script.ranges.some(([from, to]) => {
  return code >= from && code < to;
 })) {
 return script;
}
}
return null;
}
    
console.log(characterScript(121));
    
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
  let name = groupName(item);
  let known = counts.findIndex(c => c.name == name);
  if (known == -1) {
  counts.push({name, count: 1});
  } else {
  counts[known].count++;
  }
}
return counts;
}
    
function dominantDirection(text) {
    let scripts = countBy(text, char => {
     let script = characterScript(char.codePointAt(0))
     return script ? script.direction : "none"
    }).filter(({name}) => name != "none")
      
   let directions = ["ltr", "rtl", "ttb"]
   let num = -Infinity
   let dominant;
   for (let direction of directions) {
   let total = scripts.filter(({name}) => name == direction).reduce((n, {count}) => n + count, 0)
    //console.log(direction, total)
    if (total > num) {
    num = total
    dominant = direction
    } 
 }
      
   return dominant
}
    
console.log(dominantDirection("Hello!"));
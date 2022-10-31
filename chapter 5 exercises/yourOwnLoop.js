function loop(value, test, update, body) {
    for (let val = value; test(val); val = update(val)) {
          body(val)
    }
}
  
loop(0, n => n < 3, n => n + 1, console.log)
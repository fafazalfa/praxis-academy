var myFunc = function(cb) {
  doSomething(function (err, a) {
    if (err) return cb(err)
    doSomethingElse(function (err, b) {
      if (err) return cb(err)
      return cb(null, [a, b])
    })
  })
}
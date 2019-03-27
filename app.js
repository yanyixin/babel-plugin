const babel = require("babel-core");

const result = babel.transform("let bad = true", {
  plugins: [
    ['./index', {
      "bad": "good"
    }]
  ]
})

console.log(result.code);

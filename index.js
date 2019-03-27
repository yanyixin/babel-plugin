
module.exports = function ({types}) {
  return {
    visitor: {
      // 二元表达式类型节点的访问者
      BinaryExpression(path) {
        if(path.node.operator !== "*") return
        path.node.left = types.numericLiteral(3)
        path.node.right = types.numericLiteral(4)
      },
      Identifier(path, state) {
        let name = path.node.name
        if(state.opts[name]) {
          path.node.name = state.opts[name]
        }
      }
    }
  }
}
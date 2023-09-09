module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80
  printWidth: 80,
  // 一个tab代表几个空格数，默认为80
  tabWidth: 2,
  // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  useTabs: false,
  // 字符串是否使用单引号，默认为false，使用双引号
  singleQuote: true,
  // 行位是否使用分号，默认为true
  semi: true,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'all',
  // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  // 控制换行类型(lf | cr | crlf)
  // endOfLine: 'auto',
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'auto',
};

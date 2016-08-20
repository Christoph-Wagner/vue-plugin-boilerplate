module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Plugin name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Plugin description',
      default: 'A Vue.js Plugin'
    },
    version: {
      type: 'string',
      required: false,
      message: 'Initial version',
      default: '0.0.0'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    branch: {
      type: 'string',
      required: true,
      message: 'Development main branch name',
      default: 'dev'
    },
    githubAccount: {
      type: 'string',
      required: false,
      message: 'GitHub Account',
      default: ''
    },
    flow: {
      type: 'confirm',
      message: 'Setup flowtype?'
    },
    e2e: {
      type: 'confirm',
      message: 'Setup e2e tests?'
    },
    coveralls: {
      type: 'confirm',
      message: 'Setup coveralls?'
    },
    sauce: {
      type: 'confirm',
      message: 'Setup sauce tests?'
    },
    conventional: {
      type: 'confirm',
      message: 'Setup conventional-changelog tasks?'
    },
    conventionalConfig: {
      when: 'conventional',
      type: 'list',
      message: 'Choice a conventional-changelog preset',
      choices: [
        { name: 'none (configure it youreself)', value: 'none' },
        { name: 'angular', value: 'angular' },
        { name: 'atom', value: 'atom' },
        { name: 'codemirror', value: 'codemirror' },
        { name: 'ember', value: 'ember' },
        { name: 'eslint', value: 'eslint' },
        { name: 'express', value: 'express' },
        { name: 'jquery', value: 'jquery' },
        { name: 'jshint', value: 'jshint' }
      ]
    },
    gitbook: {
      type: 'confirm',
      message: 'Setup gitbook documentaion?'
    },
    issue: {
      type: 'confirm',
      message: 'Setup issue guide?'
    },
    contribution: {
      type: 'confirm',
      message: 'Setup contribution guide?'
    }
  },
  filters: {
    "examples/**/*": 'e2e',
    "test/e2e/**/*": 'e2e',
    "test/e2e/**/*": 'e2e',
    "config/karma.coveralls.conf.js": 'coveralls',
    ".flowconfig": 'flow',
    "decls/*": 'flow',
    "docs/**/**": 'gitbook',
    ".github/ISSUE_TEMPLATE.md": 'issue',
    "CONTRIBUTING.md": "contribution"
  },
  helpers: {
    nowYear: function () {
      return new Date().getFullYear()
    },
    authorFullNameFrom: function (author) {
      const startPosition = author.indexOf('<')
      return author.slice(0, startPosition - 1)
    },
    authorEmailFrom: function (author) {
      const startPosition = author.indexOf('<')
      const endPosition = author.indexOf('>')
      return author.slice(startPosition + 1, endPosition)
    },
    classify: function (str) {
      return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) {
        return c ? c.toUpperCase() : ''
      })
    }
  }
}

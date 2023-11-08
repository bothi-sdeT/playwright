const config = {
    paths: ['tests/acceptance/features/**/*.feature'],
    require: ['tests/acceptance/step_definitions/**/*.ts', 'cucumber.node.js'],
    requireModule: ['ts-node/register'],
    format: [
        'summary',
        'progress-bar',
        '@cucumber/pretty-formatter',
        ['html','./reports/report.html'],
        ['json', './reports/cucumber-html-reporter.json']
    ],
    formatOptions: { snippetInterface: 'async-await'  },

};

module.exports = {
    default: config
}
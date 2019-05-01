module.exports = [
    {
        task: 'insert',
        path: [
            'name'
        ],
        data: '@nyar/arc-reader'
    },
    {
        task: 'insert',
        path: [
            'version'
        ],
        data: '0.1.0'
    },
    {
        task: 'insert',
        path: [
            'main'
        ],
        data: 'source/index.ts'
    },
    {
        task: 'insert',
        path: [
            'license'
        ],
        data: 'MPL-2.0'
    },
    {
        task: 'insert',
        path: [
            'scripts',
            'antlr'
        ],
        data: 'antlr4ts -visitor ../../node_modules/@nyar/arc-antlr/ARC.g4 -o ./source/antlr'
    },
    {
        task: 'insert',
        path: [
            'scripts',
            'test'
        ],
        data: 'ts-node ./test/test.ts'
    },
    {
        task: 'insert',
        path: [
            'scripts',
            'build'
        ],
        data: 'yarn install && yarn antlr && tsc -b'
    },
    {
        task: 'insert',
        path: [
            'scripts',
            'upload'
        ],
        data: 'yarn build && npm publish --access public'
    },
    {
        task: 'insert',
        path: [
            'dependencies',
            '@nyar/arc-antlr'
        ],
        data: '^1.0.12'
    },
    {
        task: 'insert',
        path: [
            'dependencies',
            'antlr4ts'
        ],
        data: '^0.5.0-alpha.3'
    },
    {
        task: 'insert',
        path: [
            'dependencies',
            'js-big-decimal'
        ],
        data: '^1.2.1'
    },
    {
        task: 'insert',
        path: [
            'dependencies',
            'ramda'
        ],
        data: '^0.26.1'
    },
    {
        task: 'insert',
        path: [
            'devDependencies',
            '@types/ramda'
        ],
        data: '^0.26.8'
    }
]
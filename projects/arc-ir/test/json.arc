
    "name": "@nyar/arc-ir",
    "version": "0.2.4",
    "main": "dist/index.js",
    "license": "MPL-2.0",
    "scripts": {
        "antlr": "antlr4ts -visitor ../../node_modules/@nyar/arc-antlr/ARC.g4 -o ./source/antlr",
        "lint": "eslint test/**/*.js --fix",
        "ir": "ts-node ./test/arc-ir.ts",
        "json": "ts-node ./test/ir-json.ts && yarn lint",
        "build": "yarn install && yarn antlr && tsc -b",
        "upload": "yarn build && npm publish --access public"
    },
    "dependencies": {
        "antlr4ts": "^0.5.0-alpha.3",
        "js-big-decimal": "^1.2.1",
        "ramda": "^0.26.1"
    },
    "devDependencies": {
        "@nyar/arc-antlr": "^1.0.22",
        "@types/ramda": "^0.26.8",
        "eslint": "^5.16.0",
        "eslint-plugin-json": "^1.4.0"
    }

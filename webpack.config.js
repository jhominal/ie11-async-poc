const path = require('path');

const modernConfig = {
    mode: "production",
    target: "web",
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            }
        ]
    }
}

const ie11Config = {
    mode: "production",
    target: ["web", "es5"],
    entry: "./src/index.ie11.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.ie11.js',
    },

    resolve: {
        extensions: [ '.ts', '.js' ],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.ie11.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            }
        ]
    }
}

module.exports = [
    modernConfig,
    ie11Config,
]
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const config = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                chrome: 110,
                firefox: 102,
                edge: 110,
                safari: 16.2,
            },
            modules: false,
            corejs: 3,
            debug: false,
            useBuiltIns: 'usage',
            shippedProposals: true,
        }],
        ['@babel/preset-react', {
            useBuiltIns: true,
        }],
        ['@babel/typescript', {
            allExtensions: true,
            isTSX: true,
        }],
    ],
    plugins: [
        [
            'babel-plugin-styled-components',
            {
                ssr: false,
                fileName: false,
            },
        ],
        [
            'formatjs',
            {
                idInterpolationPattern: '[sha512:contenthash:base64:8]',
                ast: true,
            },
        ],
    ],
};

// Jest needs module transformation
config.env = {
    test: {
        presets: config.presets,
        plugins: config.plugins,
    },
};
config.env.test.presets[0][1].modules = 'auto';

module.exports = config;

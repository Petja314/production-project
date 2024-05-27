import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loader/buildCssLoaders';
import { buildBabelLoader } from './loader/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: ['@babel/preset-env'],
    //             plugins: [
    //                 [
    //                     'i18next-extract',
    //                     {
    //                         locales: ['ru', 'en'],
    //                         keyAsDefaultValue: true,
    //                     },
    //                 ],
    //                 isDev && require.resolve('react-refresh/babel')
    //             ].filter(Boolean),
    //         },
    //     },
    // };

    buildBabelLoader(options)

    const cssLoader = buildCssLoaders(isDev);

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}

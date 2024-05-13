import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import {buildCssLoaders} from "../build/loader/buildCssLoaders";


export default ({ config } : {config : webpack.Configuration}) => {
    const paths : BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map((rule : any) => {
        if(/svg/.test(rule.test)){
            return {...rule,exclude : /\.svg$/i};
        }
        return  rule;
    })
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config.module.rules.push(buildCssLoaders(true))
    return config;
};

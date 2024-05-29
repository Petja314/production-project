import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { ArticleType } from 'enteties/Article/model/types/articles';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'enteties/Article';

describe('article details selectors tests.test', () => {
    test('getArticleDetailsData', () => {
        const data = {
            id: '1',
            title: 'mock-title',
            subtitle: 'moc-subtitle',
            img: 'mock-image',
            views: 10,
            createdAt: '10.05.2024',
            type: [ArticleType.IT],
        }
        const state : DeepPartial<StateSchema> = {
            article: {
                data
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });

    test('getArticleDetailsIsLoading', () => {
        const state : DeepPartial<StateSchema> = {
            article: {
                isLoading: true
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('getArticleDetailsError', () => {
        const state : DeepPartial<StateSchema> = {
            article: {
                error: 'error'

            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });
});

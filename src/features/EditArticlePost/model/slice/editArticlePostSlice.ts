import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { EditedArticlePageSchema } from 'features/EditArticlePost';
import {
    Article, ArticleBlock, ArticleBlockType, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock, ArticleType
} from 'enteties/Article/model/types/articles';
import { User } from 'enteties/User/model/types/userSchema';
import { fetchArticleByIdThunk } from 'enteties/Article/model/services/fetchArticleById/fetchArticleById';

const block = [
    {
        id: '1',
        type: 'TEXT',
        title: 'Introduction to JavaScript',
        paragraphs: [
            'JavaScript is a versatile programming language used for web development.',
            'It can be used both on the client-side and server-side.'
        ]
    },
    {
        id: '2',
        type: 'CODE',
        code: "console.log('Hello, World!');"
    },
    {
        id: '3',
        type: 'IMAGE',
        src: 'https://via.placeholder.com/200',
        title: 'JavaScript Logo'
    }
]

const initialState: EditedArticlePageSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    // data: {
    //     title: '',
    //     subtitle: '',
    //     img: '',
    //     type: [],
    //     blocks: []
    // },
};

export const editArticlePostSlice = createSlice({
    name: 'editArticlePost',
    initialState,
    reducers: {
        setEditArticleImage: (state, action: PayloadAction<string>) => {
            state.data.img = action.payload
        },
        setEditArticleTitle: (state, action: PayloadAction<string>) => {
            // debugger
            state.data.title = action.payload
        },
        setEditArticleSubTitle: (state, action: PayloadAction<string>) => {
            state.data.subtitle = action.payload
        },
        setEditArticleType: (state, action: PayloadAction<ArticleType[]>) => {
            state.data.type = action.payload
        },
        setEditArticleTextBlockTitle: (state, action: PayloadAction<{id : string, title : string}>) => {
            // state.data.blocks.ArticleTextBlock.title = action.payload
            const { id, title } = action.payload
            const textBlockTitle = state.data?.blocks
                .find((block) => block.id === id && block.type === ArticleBlockType.TEXT) as ArticleTextBlock
            if(textBlockTitle) {
                textBlockTitle.title = title
            }
        },
        setEditArticleTextBlockParagraph: (state, action: PayloadAction<{id : string, paragraphs : any}>) => {
            // state.data.blocks.ArticleTextBlock.paragraphs = action.payload
            const { id, paragraphs } = action.payload
            const textBlockParagraphs = state.data?.blocks
                .find((block) => block.id === id && block.type === ArticleBlockType.TEXT) as ArticleTextBlock
            if(textBlockParagraphs) {
                textBlockParagraphs.paragraphs = paragraphs
            }
        },
        setEditCodeBlock: (state, action: PayloadAction<{id : string, code : string}>) => {
            // state.data.blocks.ArticleCodeBlock.code = action.payload
            const { id, code } = action.payload
            const codeBlockText = state.data?.blocks
                .find((block) => block.id === id && block.type === ArticleBlockType.CODE) as ArticleCodeBlock
            if(codeBlockText) {
                codeBlockText.code = code
            }
        },
        setEditArticleImageTitle: (state, action: PayloadAction<{id : string, title : string}>) => {
            // state.data.blocks.ArticleImageBlock.title = action.payload
            const { id, title } = action.payload
            const imageBlockTitle = state.data?.blocks
                .find((block) => block.id === id && block.type === ArticleBlockType.IMAGE) as ArticleImageBlock
            if(imageBlockTitle) {
                imageBlockTitle.title = title
            }
        },
        setEditArticleImageBlock: (state, action: PayloadAction<{id : string, img : string}>) => {
            // state.data.blocks.ArticleImageBlock.title = action.payload
            const { id, img } = action.payload
            const imageBlockTitle = state.data?.blocks
                .find((block) => block.id === id && block.type === ArticleBlockType.IMAGE) as ArticleImageBlock
            if(imageBlockTitle) {
                imageBlockTitle.src = img
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleByIdThunk.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleByIdThunk.fulfilled, (
                state,
                action: PayloadAction<Article>,
            ) => {
                // debugger
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleByIdThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: editArticlePostActions } = editArticlePostSlice;
export const { reducer: editArticlePostReducer } = editArticlePostSlice;

import React, {
    memo, useCallback, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'enteties/Counter';
import { Page } from 'widgets/Page/Page';
import cls from 'enteties/Article/ui/ArticleDetails/ArticleDetails.module.scss';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import {
    ArticleBlock, ArticleBlockType, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock
} from 'enteties/Article/model/types/articles';
import { ArticleCodeBlockComponent } from 'enteties/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'enteties/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'enteties/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';

const articles : any = [
    {
        id: '1',
        title: 'JavaScript Fundamentals',
        subtitle: 'What’s new in JavaScript for 2023?',
        img: 'https://via.placeholder.com/150',
        views: 1500,
        createdAt: '01.01.2023',
        userId: '1',
        type: [
            'IT'
        ],
        blocks: [
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
    }]

const MainPage = memo(() => {
    const { t } = useTranslation();
    const [editMode, setEditMode] = useState(false)
    const [article, setArticles] = useState<any>([articles[0]])
    const [editArticle, setEditArticles] = useState<any>(article)

    const renderBlock = (block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                editMode ? (
                    // eslint-disable-next-line no-use-before-define
                    <EditArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                        editMode={editMode}
                    />
                ) : (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                )
            );
        case ArticleBlockType.IMAGE:
            return (
                editMode ? (
                    // eslint-disable-next-line no-use-before-define
                    <EditArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                ) : (
                    <ArticleImageBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                )
            );
        case ArticleBlockType.TEXT:
            return (
                editMode ? (
                    // eslint-disable-next-line no-use-before-define
                    <EditArticleTextBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                        editMode={editMode}
                    />
                ) : (
                    <ArticleTextBlockComponent
                        key={block.id}
                        block={block}
                        className={cls.block}
                    />
                )
            );

        default:
            return null;
        }
    };

    const content = (
        <>
            <div className={cls.avatarWrapper}>
                <Avatar
                    size={200}
                    src={article.img}
                    className={cls.avatar}
                />
            </div>

            <Text
                className={cls.title}
                title={article.title}
                text={article.subtitle}
                size={TextSize.L}
            />
            <div className={cls.articleInfo}>
                <Icon className={cls.icon} Svg={EyeIcon} />
                <Text text={String(article.views)} />
            </div>
            <div className={cls.articleInfo}>
                <Icon className={cls.icon} Svg={CalendarIcon} />
                <Text text={article.createdAt} />
            </div>
            {article[0].blocks.map(renderBlock)}
        </>
    );
    return (
        <Page>
            <Button onClick={() => setEditMode(prevState => !prevState)}>
                {editMode ? 'SAVE' : 'EDIT'}
            </Button>
            {/* <Counter /> */}
            {content}

            {/* <YourComponent /> */}
        </Page>
    );
});

export default MainPage;

// ------------------------------------------------------EditArticleTextBlockComponent--------------------------------------------------------
interface EditArticleTextBlockComponentProps {
    className?: string
    block : ArticleTextBlock
    editMode : boolean
}
const EditArticleTextBlockComponent = memo(({ className, block, editMode }: EditArticleTextBlockComponentProps) => {
    const { t } = useTranslation();
    const [editArticleTitle, setEditArticleTitle] = useState(block.title)
    const [editParagraphText, setEditParagraphText] = useState<string[]>(block.paragraphs)

    const changeArticleTitle = useCallback((e : any) => {
        setEditArticleTitle(e.target.value)
    }, [])

    const handleTextChange = useCallback((index: number, value: string) => {
        setEditParagraphText((prevTexts) => {
            const newParagraphs = [...prevTexts];
            newParagraphs[index] = value;
            return newParagraphs;
            // dispatch to the server updated data (value)
        });
    }, []);

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
            {block.title
                && (
                    <input
                        type="text"
                        value={editArticleTitle}
                        style={{
                            all: 'unset', width: '100%', color: 'red', marginBottom: '16px'
                        }}
                        // .title {
                        // font: var(--font-l);
                        // color: var(--primary-color);
                        onChange={changeArticleTitle}
                    />
                )}

            {editParagraphText.map((paragraph, index : number) => (
                <Text
                    editMode={editMode}
                    handleTextChange={(value: string) => handleTextChange(index, value)}
                    key={paragraph}
                    text={paragraph}
                    className={cls.paragraph}
                />
            ))}

        </div>
    );
});

// ------------------------------------------------------EditArticleImageBlockComponent--------------------------------------------------------
interface EditArticleImageBlockComponentProps {
    className?: string
    block : ArticleImageBlock
}
const EditArticleImageBlockComponent = memo(({ className, block }: EditArticleImageBlockComponentProps) => {
    const { t } = useTranslation();
    const [editArticleTitle, setEditArticleTitle] = useState(block?.title)

    const handleChangeTitleTest = useCallback((e : any) => {
        setEditArticleTitle(e.target.value)
        // dispatch to the server updated data (value)
    }, [])

    console.log('editArticleTitle', editArticleTitle)
    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt="image" className={cls.img} />
            {block.title
                && (
                    <input
                        type="text"
                        value={editArticleTitle}
                        style={{
                            all: 'unset', width: '100%', color: 'red', textAlign: 'center'
                        }}
                        onChange={handleChangeTitleTest}
                    />
                )}
        </div>
    );
});

// -------------------------------------------------------EditArticleCodeBlockComponent-----------------------------------------------------------------------------

interface EditArticleCodeBlockComponentProps {
    className?: string
    block : ArticleCodeBlock
    editMode? : boolean
}

const EditArticleCodeBlockComponent = memo(({ className, block, editMode }: EditArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    const [codeEditInput, setCodeEditInput] = useState(block.code)

    const handleCodeChange = useCallback((value : any) => {
        setCodeEditInput(value)
        // dispatch to the server updated data (value)
    }, [])
    // console.log('codeEdit editMode >', editMode)
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
            <Code
                text={codeEditInput}
                editMode={editMode}
                handleCodeChange={handleCodeChange}
            />
        </div>
    );
});

export const YourComponent = () => {
    const [edit, setEdit] = useState(false);
    const [content, setContent] = useState('SOME CONTENT');
    const [editContent, setEditContent] = useState(content);

    const handleEditToggle = () => {
        if (edit) {
            setContent(editContent); // Save the edited content
        }
        setEdit((prevState) => !prevState); // Toggle the edit mode
    };

    const handleInputChange = (e : any) => {
        setEditContent(e.target.value); // Update the input field content
    };

    return (
        <div>
            <Button onClick={handleEditToggle}>
                {edit ? 'SAVE' : 'EDIT'}
            </Button>
            {edit ? (
                <div>
                    <input type="text" value={editContent} onChange={handleInputChange} style={{ all: 'unset', width: '1000px' }} />
                </div>

            ) : (
                <div>{content}</div>
            )}
        </div>
    );
};

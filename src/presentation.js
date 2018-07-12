import React from 'react';
import {
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Appear,
    Layout,
    Fill,
    Fit,
    S,
    Notes
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import basic from './examples/basic';
import basicHtml from './examples/basic-html';
import basicSplit from './examples/basic-split';
import basicSplitHtml from './examples/basic-split-html';
import modules from './examples/modules';
import addSplit from './examples/add-split';
import mainSplit from './examples/main-split';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./main.css');

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quartenary: '#CECECE'
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
                <Slide transition={['zoom']} bgColor="tertiary">
                    <Notes>
                        <div>
                            Webpack is an important part of the frontend web development toolchain,
                            but it can sometimes be misunderstood.
                        </div>
                    </Notes>
                    <Appear>
                        <Heading size={1} fit caps lineHeight={1} textColor="primary">
                            Webpack
                        </Heading>
                    </Appear>
                </Slide>
                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Notes>
                            <div>The three terms I want you to keep in mind are:</div>
                            <ul>
                                <li>Modules</li>
                                <li>Dependency Graph</li>
                                <li>Bundle</li>
                            </ul>
                        </Notes>
                        <Quote style={{ fontSize: '2.5rem', lineHeight: 1.4 }}>
                            At its core, webpack is a static{' '}
                            <S type="bold" textColor="tertiary">
                                module
                            </S>{' '}
                            bundler for modern JavaScript applications. When webpack processes your
                            application, it internally builds a{' '}
                            <S type="bold" textColor="tertiary">
                                dependency graph
                            </S>{' '}
                            which maps every module your project needs and generates one or more{' '}
                            <S type="bold" textColor="tertiary">
                                bundles
                            </S>.
                        </Quote>
                        <Cite>Webpack Docs</Cite>
                    </BlockQuote>
                </Slide>
                <Slide bgColor="black">
                    <CodePane
                        style={{ fontSize: '1.7rem' }}
                        lang="js"
                        source={basic}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1.7rem' }}
                        lang="html"
                        source={basicHtml}
                        theme="external"
                    />
                </Slide>
                <Slide bgColor="black">
                    <CodePane
                        style={{ fontSize: '1.3rem' }}
                        lang="js"
                        source={addSplit}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1.3rem' }}
                        lang="js"
                        source={mainSplit}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1.3rem' }}
                        lang="html"
                        source={basicSplitHtml}
                        theme="external"
                    />
                </Slide>
                <Slide bgColor="black">
                    <CodePane
                        style={{ fontSize: '0.9rem' }}
                        lang="js"
                        source={modules}
                        theme="external"
                    />
                </Slide>
                <Slide bgColor="tertiary">
                    <Heading fit caps textColor="primary">
                        Core Concepts - Entry
                    </Heading>
                </Slide>
                <Slide bgColor="primary" textColor="tertiary">
                    <Heading size={5} textColor="secondary" caps>
                        Specifying an entry point tells Webpack which module...
                    </Heading>
                    <List>
                        <ListItem>...to begin with when building dependency graph</ListItem>
                        <ListItem>...to execute when bundle is loaded in browser</ListItem>
                    </List>
                </Slide>

                <Slide bgColor="tertiary">
                    <Heading fit caps textColor="primary">
                        Core Concepts - Output
                    </Heading>
                </Slide>

                <Slide bgColor="tertiary">
                    <Heading fit caps textColor="primary">
                        Core Concepts - Loaders
                    </Heading>
                </Slide>

                <Slide bgColor="tertiary">
                    <Heading fit caps textColor="primary">
                        Core Concepts - Plugins
                    </Heading>
                </Slide>

                <Slide transition={['fade']} bgColor="tertiary">
                    <Heading size={6} textColor="primary" caps>
                        Typography
                    </Heading>
                    <Heading size={1} textColor="secondary">
                        Heading 1
                    </Heading>
                    <Heading size={2} textColor="secondary">
                        Heading 2
                    </Heading>
                    <Heading size={3} textColor="secondary">
                        Heading 3
                    </Heading>
                    <Heading size={4} textColor="secondary">
                        Heading 4
                    </Heading>
                    <Heading size={5} textColor="secondary">
                        Heading 5
                    </Heading>
                    <Text size={6} textColor="secondary">
                        Standard text
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
                    <Heading size={6} textColor="secondary" caps>
                        Standard List
                    </Heading>
                    <List>
                        <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 3</ListItem>
                        <ListItem>Item 4</ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary" textColor="primary">
                    <BlockQuote>
                        <Quote>Example Quote</Quote>
                        <Cite>Author</Cite>
                    </BlockQuote>
                </Slide>
                <Slide transition={['slide']} bgDarken={0.75}>
                    <Appear fid="1">
                        <Heading size={1} caps fit textColor="tertiary">
                            Full Width
                        </Heading>
                    </Appear>
                    <Appear fid="2">
                        <Heading size={1} caps fit textColor="tertiary">
                            Adjustable Darkness
                        </Heading>
                    </Appear>
                    <Appear fid="3">
                        <Heading size={1} caps fit textColor="tertiary">
                            Background Imagery
                        </Heading>
                    </Appear>
                </Slide>
                <Slide transition={['zoom', 'fade']} bgColor="primary">
                    <Heading caps fit>
                        Flexible Layouts
                    </Heading>
                    <Layout>
                        <Fill>
                            <Heading
                                size={4}
                                caps
                                textColor="secondary"
                                bgColor="white"
                                margin={10}
                            >
                                Left
                            </Heading>
                            <List>
                                <Appear>
                                    <ListItem>Inline style based theme system</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>Autofit text</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>Flexbox layout system</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>PDF export</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>And...</ListItem>
                                </Appear>
                            </List>
                        </Fill>
                        <Fill>
                            <Heading
                                size={4}
                                caps
                                textColor="secondary"
                                bgColor="white"
                                margin={10}
                            >
                                Right
                            </Heading>
                            <List>
                                <Appear>
                                    <ListItem>Inline style based theme system</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>Autofit text</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>Flexbox layout system</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>PDF export</ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem>And...</ListItem>
                                </Appear>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>
            </Deck>
        );
    }
}

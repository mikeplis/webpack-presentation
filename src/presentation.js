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
    Fit
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import basic from './examples/basic';
import basicHtml from './examples/basic-html';
import basicSplit from './examples/basic-split';
import basicSplitHtml from './examples/basic-split-html';
import modules from './examples/modules';

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
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Mike Plis
                    </Heading>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
                        Software Engineer - Oyster
                    </Text>
                </Slide>
                <Slide transition={['zoom']} bgColor="primary">
                    <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                        Webpack
                    </Heading>
                </Slide>
                <CodeSlide
                    bgColor="secondary"
                    code={basic}
                    lang="js"
                    ranges={[
                        { loc: [0, 100] },
                        { loc: [0, 3] },
                        { loc: [4, 7] },
                        { loc: [8, 11] },
                        { loc: [12, 18] }
                    ]}
                />
                <Slide bgColor="black">
                    <Layout>
                        <Fill>
                            <CodePane
                                style={{ fontSize: '1.1rem' }}
                                lang="js"
                                source={basic}
                                theme="external"
                            />
                        </Fill>
                        <Fill>
                            <CodePane
                                style={{ fontSize: '1.1rem' }}
                                lang="html"
                                source={basicHtml}
                                theme="external"
                            />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="black">
                    <Layout>
                        <Fill>
                            <CodePane
                                style={{ fontSize: '1rem' }}
                                lang="js"
                                source={basicSplit}
                                theme="external"
                            />
                        </Fill>
                        <Fill>
                            <CodePane
                                style={{ fontSize: '1rem' }}
                                lang="html"
                                source={basicSplitHtml}
                                theme="external"
                            />
                        </Fill>
                    </Layout>
                </Slide>
                <Slide bgColor="black">
                    <CodePane
                        style={{ fontSize: '0.9rem' }}
                        lang="js"
                        source={modules}
                        theme="external"
                    />
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

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
    Image,
    Notes
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import addModule from './examples/add-module';
import addSplit from './examples/add-split';
import basic from './examples/basic';
import basicHtml from './examples/basic-html';
import basicSplitHtml from './examples/basic-split-html';
import mainModule from './examples/main-module';
import mainSplit from './examples/main-split';
import moduleHtml from './examples/module-html';
import simpleWebpackConfig from './examples/simple-webpack-config';
import styleLoaderWebpackConfig from './examples/style-loader-webpack-config';
import modifiedBundle from './examples/modified-bundle';
import render from './examples/render';
import mainCss from './examples/main-css';
import mainWithRender from './examples/main-with-render';
import uglifyJsPluginWebpackConfig from './examples/uglifyjs-plugin-webpack-config';

import createTheme from 'spectacle/lib/themes/default';

import image from './webpage.png';

require('prismjs/components/prism-bash');
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
                    <Heading size={1} fit caps lineHeight={1} textColor="primary">
                        Webpack
                    </Heading>
                </Slide>

                <Slide bgColor="secondary">
                    <BlockQuote>
                        <Notes>
                            <strong>
                                The purpose of webpack is to take our collection of small JavaScript
                                files and merge them into a single JavaScript file while ensuring
                                that all JavaScript is executed in the correct order.
                            </strong>
                            <div>
                                Webpack enables a lot of other things, but that's the core purpose
                            </div>
                            <div>The three terms I want you to keep in mind are:</div>
                            <ul>
                                <li>Modules</li>
                                <li>Dependency Graph</li>
                                <li>Bundle</li>
                            </ul>
                            <div>
                                <u>
                                    Before getting to webpack, let's first talk about some ways we
                                    can organize our JavaScript code and serve it to our users
                                </u>
                            </div>
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
                    <Notes>
                        <ul>
                            <li>
                                Here's a very simple web page that defines an add function, calls
                                it, and logs the result to the console
                            </li>
                            <li>
                                All of our code is contained in this one file, so we can just load
                                this file when the user visits our page
                            </li>
                            <li>
                                <u>
                                    Putting all of our code in one file is fine for small pages like
                                    this, but as our app grows, we'll want to split our code into
                                    separate files. Let's see what happens when we try to do that.
                                </u>
                            </li>
                        </ul>
                    </Notes>
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
                    <Notes>
                        <ul>
                            <li>
                                We want to split our code into separate files (aka <em>modules</em>)
                            </li>
                            <li>
                                Modules can't automatically share code between them, so we have to
                                put things in the global scope
                            </li>
                            <li>
                                This isn't great because the isn't not clear from just looking at
                                main.js where window.add is coming from - that dependency is
                                implicit
                            </li>
                            <li>
                                Another problem is that the order that our scripts load is now
                                important. Our page will break if main.js is loaded before add.js.
                                Manually managing these dependencies is difficult at scale.
                            </li>
                            <li>
                                This also isn't a great experience for our users because now they
                                need to load two scripts instead of just one. This problem gets much
                                worse as the number of modules increases.
                            </li>
                            <li>
                                <u>
                                    We need a better way to manage dependencies between our modules
                                    and that's where Webpack comes in
                                </u>
                            </li>
                        </ul>
                    </Notes>
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

                <Slide bgColor="primary">
                    <Notes>
                        <ul>
                            <li>
                                JavaScript modules have an interesting history. There have been many
                                solutions over the years, but things are starting to consolidate
                                around the new ES6 module syntax
                            </li>
                            <li>
                                This allows us to be very explicit about what things our modules
                                expose to each other, what things they depend on from other modules,
                                and where those things are coming from
                            </li>
                        </ul>
                    </Notes>
                    <Heading size={5} textColor="secondary" caps>
                        JavaScript Modules
                    </Heading>
                    <List>
                        <ListItem>ES6 modules, CommonJS, AMD</ListItem>
                        <ListItem>
                            <code>
                                <S type="bold" textColor="tertiary">
                                    import
                                </S>{' '}
                                add{' '}
                                <S type="bold" textColor="tertiary">
                                    from
                                </S>{' '}
                                './add.js'
                            </code>
                        </ListItem>
                        <ListItem>
                            <code>
                                <S type="bold" textColor="tertiary">
                                    export default
                                </S>{' '}
                                add
                            </code>
                        </ListItem>
                    </List>
                </Slide>

                <Slide bgColor="black">
                    <Notes>
                        <ul>
                            <li>
                                Webpack is able to use these import/export statements to create a
                                dependency graph for our application. The nodes in the dependency
                                graph are our modules and the edges indicate dependencies between
                                modules.
                            </li>
                            <li>
                                Webpack then uses this dependency graph to generate a single file
                                (or <em>bundle</em>) that contains all of our code.
                            </li>
                            <li>
                                In this way, webpack allows us to write modular JavaScript code, but
                                still serve a single file to our users. Let's take a closer look at
                                how webpack does this.
                            </li>
                            <li>
                                <u>
                                    Let's dig into how webpack creates the dependency graph and the
                                    bundle
                                </u>
                            </li>
                        </ul>
                    </Notes>
                    <CodePane
                        style={{ fontSize: '1.3rem' }}
                        lang="js"
                        source={addModule}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1.3rem' }}
                        lang="js"
                        source={mainModule}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1.3rem' }}
                        lang="html"
                        source={moduleHtml}
                        theme="external"
                    />
                </Slide>

                <Slide bgColor="tertiary">
                    <Notes>
                        <ul>
                            In order for webpack to do its thing, we need to give it some
                            configuration.
                        </ul>
                        <ul>The first piece of that configuration is the entry point</ul>
                    </Notes>
                    <Heading fit caps textColor="primary">
                        Entry Points
                    </Heading>
                </Slide>

                <Slide bgColor="primary">
                    <Notes>
                        <ul>
                            <li>In our simple app, the entry point is main.js</li>
                        </ul>
                    </Notes>
                    <Heading size={5} textColor="secondary" caps>
                        Entry Points
                    </Heading>
                    <List>
                        <ListItem>
                            Specify where to begin when building the{' '}
                            <S type="bold" textColor="tertiary">
                                dependency graph
                            </S>
                        </ListItem>
                        <ListItem>
                            Instruct which module to execute when the{' '}
                            <S type="bold" textColor="tertiary">
                                bundle
                            </S>{' '}
                            is loaded in browser
                        </ListItem>
                    </List>
                </Slide>

                <Slide bgColor="tertiary">
                    <Notes>
                        <ul>
                            <li>
                                The second piece of configuration we need to give webpack is the
                                output
                            </li>
                        </ul>
                    </Notes>
                    <Heading fit caps textColor="primary">
                        Output
                    </Heading>
                </Slide>

                <Slide bgColor="primary" textColor="tertiary">
                    <Heading size={3} textColor="secondary" caps>
                        Output tells webpack where to emit the{' '}
                        <S type="bold" textColor="tertiary">
                            bundle
                        </S>{' '}
                        that it creates
                    </Heading>
                </Slide>

                <Slide bgColor="black">
                    <Notes>
                        <ul>
                            <li>
                                The exact configuration syntax isn't super important, but I at least
                                wanted to show a basic configuration
                            </li>
                            <li>
                                This is a file called webpack.config.js which is a filename that
                                webpack will automatically look for
                            </li>
                            <li>
                                This tells webpack to start building the bundle from main.js and to
                                output the bundle to the dist directory with a filename of bundle.js
                            </li>
                        </ul>
                    </Notes>
                    <CodePane
                        style={{ fontSize: '1.5rem' }}
                        lang="js"
                        source={simpleWebpackConfig}
                        theme="external"
                    />
                </Slide>

                <Slide bgColor="black">
                    <Notes>
                        <ul>
                            <li>
                                This is a very loose representation of what the generated bundle
                                file is doing
                            </li>
                            <li>
                                <u>
                                    There are a few things going on here, so let's take a closer
                                    look at this file
                                </u>
                            </li>
                        </ul>
                    </Notes>
                    <CodePane
                        style={{ fontSize: '1.5rem' }}
                        lang="js"
                        source={modifiedBundle}
                        theme="external"
                    />
                </Slide>

                <CodeSlide
                    lang="js"
                    code={modifiedBundle}
                    ranges={[
                        {
                            loc: [1, 14],
                            notes: (
                                <ul>
                                    <li>Webpack has turned our modules into simple functions</li>
                                    <li>It's placed those modules into an array</li>
                                </ul>
                            )
                        },
                        {
                            loc: [6, 7],
                            notes:
                                'Module exports are now just values returned from our module function'
                        },
                        {
                            loc: [9, 10],
                            notes: 'Module imports are now just calls to our module functions'
                        },
                        {
                            loc: [15, 17],
                            notes: (
                                <ul>
                                    <li>
                                        Webpack executes our bundle by calling the module function
                                        of our entry point.
                                    </li>
                                    <li>
                                        The actual output bundle is slightly more complicated to
                                        handle things like module caching so we're not executing our
                                        module functions more than once, but this is basically what
                                        it does.
                                    </li>
                                    <li>
                                        I'd encourage you to take a look at an actual bundle file
                                        sometime.
                                    </li>
                                    <li>
                                        <u>
                                            Now let's look at two related concepts that make webpack
                                            very powerful: Loaders and plugins
                                        </u>
                                    </li>
                                </ul>
                            )
                        }
                    ]}
                />

                <Slide bgColor="tertiary">
                    <Notes>
                        <ul>
                            <li>
                                Loaders allow us to perform certain tasks while a bundle is being
                                created
                            </li>
                            <li>Loaders typically operate on the individual file level</li>
                        </ul>
                    </Notes>
                    <Heading fit caps textColor="primary">
                        Loaders
                    </Heading>
                </Slide>

                <Slide bgColor="primary">
                    <Notes>
                        <ul>
                            <li>
                                We can configure webpack to run Babel on our JavaScript files as its
                                creating the bundle
                            </li>
                            <li>
                                We can also use loaders to teach webpack how to deal with file types
                                other than JavaScript, like CSS and images
                            </li>
                            <li>
                                This means that our dependency graph can include things other than
                                JavaScript files
                            </li>
                            <li>
                                <u>This has some interesting implications...</u>
                            </li>
                        </ul>
                    </Notes>
                    <Heading size={3} textColor="secondary">
                        Loaders
                    </Heading>
                    <List>
                        <ListItem>Transpile JavaScript using Babel</ListItem>
                        <ListItem>
                            <S type="bold" textColor="tertiary">
                                Import file types other than JavaScript like CSS and images
                            </S>
                        </ListItem>
                    </List>
                </Slide>

                <Slide bgColor="black">
                    <Notes>
                        <ul>
                            <li>
                                Let's add a new module called render.js that takes an element type
                                and some text and renders that element into the browser
                            </li>
                            <li>
                                We also want to style elements so we include some CSS in our
                                application
                            </li>
                            <li>
                                render.js is the file that cares about the CSS so we{' '}
                                <strong>import the CSS</strong> from this file
                            </li>
                            <li>
                                <u>
                                    This doesn't work out of the box, so we need to install some
                                    loaders and change our configuration in order to teach webpack
                                    how to handle this
                                </u>
                            </li>
                        </ul>
                    </Notes>
                    <CodePane
                        style={{ fontSize: '1rem' }}
                        lang="js"
                        source={render}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1rem' }}
                        lang="css"
                        source={mainCss}
                        theme="external"
                    />
                    <CodePane
                        style={{ fontSize: '1rem' }}
                        lang="diff"
                        source={mainWithRender}
                        theme="external"
                    />
                </Slide>

                <Slide bgColor="black">
                    <CodePane
                        style={{ fontSize: '1.8rem' }}
                        source="$ npm install --save-dev style-loader css-loader"
                        theme="external"
                        lang="bash"
                    />
                </Slide>

                <Slide bgColor="black">
                    <Notes>
                        <ul>
                            <li>Again, the exact syntax is not super important</li>
                            <li>What this change does is it allows webpack to process CSS files</li>
                        </ul>
                    </Notes>
                    <CodePane
                        style={{ fontSize: '1.2rem' }}
                        lang="diff"
                        source={styleLoaderWebpackConfig}
                        theme="external"
                    />
                </Slide>

                <Slide>
                    <Image src={image} />
                </Slide>

                <Slide bgColor="tertiary">
                    <Notes>
                        <ul>
                            <li>
                                Plugins are similar to loaders in that they perform tasks during our
                                build process
                            </li>
                            <li>
                                The difference is that plugins typically operate on the generated
                                bundle and run after the bundle has been created
                            </li>
                            <li>
                                I'll show how to use one of the simpler webpack plugins that
                                minifies our bundle so we can serve a smaller file to our users
                            </li>
                        </ul>
                    </Notes>
                    <Heading fit caps textColor="primary">
                        Plugins
                    </Heading>
                </Slide>

                <Slide bgColor="black">
                    <CodePane
                        style={{ fontSize: '1.8rem' }}
                        source="$ npm install --save-dev uglifyjs-webpack-plugin"
                        theme="external"
                        lang="bash"
                    />
                </Slide>

                <Slide bgColor="black">
                    <Notes>
                        <ul>
                            <li>
                                Most plugins will be installed under the 'plugins' config, but this
                                plugin works slightly differently
                            </li>
                            <li>
                                Now, when we run webpack, it will generate a bundle like normal and
                                then it will minify that file
                            </li>
                        </ul>
                    </Notes>
                    <CodePane
                        style={{ fontSize: '1rem' }}
                        lang="diff"
                        source={uglifyJsPluginWebpackConfig}
                        theme="external"
                    />
                </Slide>

                <Slide bgColor="primary">
                    <Notes>
                        <ul />
                    </Notes>
                    <Heading size={3} textColor="secondary">
                        Other Plugins
                    </Heading>
                    <List>
                        <ListItem>
                            ExtractTextWebpackPlugin - extracts imported CSS into separate file
                        </ListItem>
                        <ListItem>
                            DefinePlugin - create global constants that can be configured at build
                            time
                        </ListItem>
                        <ListItem>
                            BundleAnalyzerPlugin - creates interactive visualization of the contents
                            of your bundles
                        </ListItem>
                    </List>
                </Slide>

                <Slide bgColor="tertiary">
                    <Notes>
                        <ul>
                            <li>
                                Webpack is extremely configurable and there are a lot of other cool
                                things you can do with it that make for a better developer and user
                                experience
                            </li>
                            <li>
                                I highly encourage you to explore the docs and see what else webpack
                                is capable of
                            </li>
                            <li>
                                Hopefully you've come away with a better understanding of what
                                webpack does and why it's an important tool
                            </li>
                            <li>Thank you for your time</li>
                            <li>Any questions?</li>
                        </ul>
                    </Notes>
                    <Heading fit caps textColor="primary">
                        Conclusion
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}

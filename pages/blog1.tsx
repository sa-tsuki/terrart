import Layout from '../components/layout'
import Head from 'next/head'
import Date from '../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import utilStyles from '../styles/utils.module.css'
import { blogs } from '../lib/blogs'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

export default function Post({
    blog, highlightedBody
}: {
    blog: {
        id: string,
        createdAt: any,
        updatedAt: any,
        publishedAt: any,
        revisedAt: any,
        title: string,
        subtitle: string,
        thumbnail: {
            url: string,
            height: number,
            width: number
        },
        category?: [],
        content: string
    }
}) {
    console.log(blog)

    return (
        <Layout>
            <Head>
                <title>{blog.title}</title>
            </Head>
            <article>
                <button onClick={() => getSortedPostsData()}></button>
                <h1 className={utilStyles.headingXl}>{blog.title}</h1>
                <div className={utilStyles.lightText}>
                    {blog.createdAt}
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: highlightedBody }} /> */}
                <h1>ここに文言を入れて。</h1>
                <p>パラグラフがこんな感じで入ってきて、<strong>たまにストロングとかにしちゃったり。</strong>
                    <br />改行入れてみたりして整形していく感じになるでしょうか。</p>
                <p>本当はマークダウン方式で書いていきたいけどマークダウン方式だと、文章の中にJSをはめ込むことができなさそうだから今のところこうやるしかない？</p>
                <blockquote>引用はこんな感じ</blockquote>
                <Test />
                <h2>これがh2だよー</h2>
                <p>ちょっと慣れないけどしばらくこれでやるしかないのかな。各記事のテンプレート作成して、必要な時にreactで作ったコンポーネント呼び出していく。
                    <br />確かにこれだとコンポーネント化の勉強とかにもなるからいいのかもしれないね。ちなみに</p>
                <pre className="prettyprint">
                    <code className="linenums">
                        &lt;html&gt;
                        
                        &lt;head&gt;
                        &lt;link rel=&quot;stylesheet&quot; href=&quot;prettify.css&quot;&gt;
                        &lt;link rel=&quot;stylesheet&quot; href=&quot;http://fonts.googleapis.com/css?family=Source+Code+Pro&quot;&gt;
                        &lt;/head&gt;
                        &lt;body&gt;
                        &lt;pre class=&quot;prettyprint&quot; style=&quot;font-family:&#039;Source Code Pro&#039;;&quot;&gt;
                        ここにコードを書きます
                        &lt;/pre&gt;
                        &lt;script src=&quot;prettify.js&quot;&gt;&lt;/script&gt;
                        &lt;script&gt;prettyPrint();&lt;/script&gt;
                        &lt;/body&gt;
                        &lt;/html&gt;
                    </code>
                </pre>
            </article>
        </Layout>
    )
}

//
export const getStaticProps: GetStaticProps = async () => {
    const data = await blogs.get({
        endpoint: "blog",
        contentId: "mxmkr5f9um3"
    });

    return {
        props: {
            blog: data
        }
    }
}


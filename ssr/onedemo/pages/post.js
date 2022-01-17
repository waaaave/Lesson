import Link from 'next/link' // next.js nuxt.js
import Image from 'next/image' // next.js 提供了 Image组件
import Head from 'next/head'

export default function Post(props) {
    let { topics } = props
    return (
        <>
            <Head>
                <title>First Post</title>
            </Head>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
            <ul>
                {topics.map(
                    (topic, index) => (<li key={index}>{topic}</li>)
                )}
            </ul>
            <div style={{height: '3000px'}}></div>
            <Image 
                src="/images/logo.png"
                width={500}
                height={500}
            />
        </>
    )
}
// next.js -> node api 在服务器端把第一次请求也完成
Post.getInitialProps = async(ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return {
        topics: json.topics
    }
}
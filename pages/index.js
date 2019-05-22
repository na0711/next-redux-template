import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
// import SampleData from '../components/SampleData';
import Counter from '../components/counter'

const Index = (props) => (
  <Layout title="トップページ">
    <main className="main">
      <Counter />
      {/* <SampleData /> */}
      <h1>トップページ</h1>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
		<style jsx>{`
		`}</style>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()
  return {
    shows: data
  }
}

export default Index

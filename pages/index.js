import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  // const data = await fetch("https://jsonplaceholder.typicode.com/todos").then(
  //   (response) => response.json()
  // );

  return {
    props: {
      allPostsData,
      // data, // Uncomment this line if you want to use the fetched data
    },
  };
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       allPostsData: [
//         {
//           id: "ssg-ssr",
//           date: "2023-10-01",
//           title: "SSG and SSR",
//         },
//         {
//           id: "pre-rendering",
//           date: "2023-10-02",
//           title: "Pre-rendering and Data Fetching",
//         },
//       ],
//     },
//   };
// }

export default function Home({ allPostsData }) {
  console.log("test");
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          {/* {data.map((item) => (
            <li className={utilStyles.listItem} key={item.id}>
              {item.id}
              {item.title}
            </li>
          ))} */}
        </ul>
      </section>
    </Layout>
  );
}

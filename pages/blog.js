import React from "react";
import "isomorphic-unfetch";
import withLayout from "../components/layout";

const Page = ({ data }) => {
  data.data.posts.length > 0
    ? posts.map(p => (
        <Post
          alt={p.fields.alt}
          date={p.fields.date}
          key={p.fields.title}
          image={p.fields.image}
          title={p.fields.title}
          url={p.fields.url}
        />
      ))
    : null;
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query {
        posts {
          title
          # content
          body
          date
          alt
          url
        } 
      }`
    })
  });
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default withLayout(Page);

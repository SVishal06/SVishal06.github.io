"use client";

import { useEffect, useState } from "react";

const HASHNODE_PUBLICATION = "vishalbuild.hashnode.dev";

type Post = {
  title: string;
  brief: string;
  publishedAt: string;
  url: string;
};

type HashnodeResponse = {
  data?: {
    publication?: {
      posts?: {
        edges?: Array<{ node: Post }>;
      };
    };
  };
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

export function HashnodePostPreviews() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `query PublicationPosts {\n  publication(host: \"${HASHNODE_PUBLICATION}\") {\n    posts(first: 6) {\n      edges {\n        node {\n          title\n          brief\n          publishedAt\n          url\n        }\n      }\n    }\n  }\n}`
          })
        });

        if (!response.ok) throw new Error("Unable to load posts");

        const result = (await response.json()) as HashnodeResponse;
        const loadedPosts = result.data?.publication?.posts?.edges?.map(({ node }) => node) ?? [];

        setPosts(loadedPosts.length > 0 ? loadedPosts : []);
      } catch {
        setPosts([]);
      }
    }

    void loadPosts();
  }, []);

  if (!posts || posts.length === 0) {
    return (
      <div className="card-actions">
        <a
          href={`https://${HASHNODE_PUBLICATION}`}
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Visit the blog
        </a>
      </div>
    );
  }

  return (
    <div className="post-preview-list">
      {posts.map((post) => (
        <a key={post.url} href={post.url} target="_blank" rel="noreferrer" className="post-preview">
          <span className="meta">{formatDate(post.publishedAt)}</span>
          <h3>{post.title}</h3>
          <p>{post.brief}</p>
          <span className="ghost-link">Read post <span aria-hidden="true">→</span></span>
        </a>
      ))}
    </div>
  );
}

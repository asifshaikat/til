// File: scripts/create-post.js
const fs = require('fs');
const path = require('path');

function createPost(type) {
  const date = new Date().toISOString().split('T')[0];
  const template = `---
layout: post
title: "New ${type} Post"
date: ${date}
categories: [${type}]
---

# ${type}: Title

Content goes here...
`;

  const fileName = `_posts/${date}-new-${type}-post.md`;
  fs.writeFileSync(path.join(__dirname, '..', fileName), template);
  console.log(`Created new post: ${fileName}`);
}

const type = process.argv[2] || 'til';
createPost(type);
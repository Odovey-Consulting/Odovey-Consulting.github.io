#!/bin/bash
CONTENT_DIR="content/blog"
REPO_URL="https://github.com/Odovey-Consulting/odovey-blog.git"

echo "Fetching blog content..."
rm -rf "$CONTENT_DIR"
mkdir -p content
git clone "$REPO_URL" "$CONTENT_DIR"

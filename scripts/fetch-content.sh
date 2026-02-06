#!/bin/bash
CONTENT_DIR="content/blog"
REPO_URL="https://github.com/Odovey-Consulting/odovey-blog.git"

if [ -d "$CONTENT_DIR/.git" ]; then
  echo "Pulling latest blog content..."
  git -C "$CONTENT_DIR" pull --ff-only
else
  echo "Cloning blog content..."
  mkdir -p content
  git clone "$REPO_URL" "$CONTENT_DIR"
fi

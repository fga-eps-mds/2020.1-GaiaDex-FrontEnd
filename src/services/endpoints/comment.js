import { ENDPOINTS, baseHeaders, getToken } from './index';

export const createComment = (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.create.route(commentID), {
      method: COMMENT.create.method,
      headers: baseHeaders(getToken()),
      body: JSON.stringify({
        text: topicBody.text,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const updateComment = (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.update.route(commentID), {
      method: COMMENT.update.method,
      headers: baseHeaders(getToken()),
      body: JSON.stringify({
        text: topicBody.text,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const deleteComment = (commentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.delete.route(commentID), {
      method: COMMENT.delete.method,
      headers: baseHeaders(getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const likeComment = (commentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.like.route(commentID), {
      method: COMMENT.like.method,
      headers: baseHeaders(getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const dislikeComment = (CommentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.dislike.route(CommentID), {
      method: COMMENT.dislike.method,
      headers: baseHeaders(getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

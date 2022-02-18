/**
 * @name: blog
 * @author: chuanchuan
 * @date: 2022-02-14 14:38
 * @description：blog
 * @update: 2022-02-14 14:38
 */

import request from "@/api/request";

// 获取博客列表数据
// page：当前页码        limit：页容量       categoryid：所属分类
export async function getBlogs(page=1, limit=10, categoryid=-1) {
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid
    }
  });
}

// 获取博客分类
export async function getBlogCategories() {
  return await request.get("/api/blogtype");
}

// 获取单个博客，id为博客的id
export async function getBlog(id) {
  return await request.get(`/api/blog/${id}`)
}

// 提交评论
export async function postComment(commentInfo) {
  return await request.post(`/api/comment`, commentInfo);
}

// 分页获取评论
export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get("/api/comment", {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
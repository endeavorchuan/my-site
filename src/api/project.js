/**
 * @name: project
 * @author: chuanchuan
 * @date: 2022-03-01 18:38
 * @description：project
 * @update: 2022-03-01 18:38
 */

import request from "./request";

export async function getProjects() {
  return await request.get("/api/project");
}
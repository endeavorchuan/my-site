/**
 * @name: about
 * @author: chuanchuan
 * @date: 2022-03-01 17:51
 * @description：about
 * @update: 2022-03-01 17:51
 */

import request from "@/api/request";

export async function getAbout() {
  return await request.get("api/about");
}
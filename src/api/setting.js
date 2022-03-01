/**
 * @name: setting
 * @author: chuanchuan
 * @date: 2022-03-01 13:57
 * @description：setting
 * @update: 2022-03-01 13:57
 */

import request from "@/api/request";

export async function getSetting() {
  return await request.get("/api/setting");
}
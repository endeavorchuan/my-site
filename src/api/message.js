/**
 * @name: message
 * @author: chuanchuan
 * @date: 2022-03-01 21:17
 * @description：message
 * @update: 2022-03-01 21:17
 */

import request from "@/api/request";

export async function getMessage(page=1, limit=10) {
  return await request.get("/api/message", {
    params: {
      page,
      limit
    }
  });
}

export async function postMessage(msgInfo) {
  return await request.post("/api/message", msgInfo);
}
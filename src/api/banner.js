/**
 * @name: test
 * @author: chuanchuan
 * @date: 2022-02-07 11:34
 * @description：test
 * @update: 2022-02-07 11:34
 */

import request from "@/api/request";

export async function getBanners() {
    return await request.get("/api/banner");
}

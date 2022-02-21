/**
 * @name: formatDate
 * @author: chuanchuan
 * @date: 2022-02-16 14:58
 * @description：formatDate
 * @update: 2022-02-16 14:58
 */

// 格式化日期
export default function (timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const month = (date.getMonth()+1).toString().padStart(2, "0");    // 保证字符串长度为2，若不足2，则在前面填充0
  const day = date.getDate().toString().padStart(2, "0");
  let str = `${date.getFullYear()}-${month}-${day}`;

  if(showTime) {
    const hour = date.getHours().toString().padStart(2, "0")
    const minute = date.getMinutes().toString().padStart(2, "0")
    const second = date.getSeconds().toString().padStart(2, "0")
    str += ` ${hour}:${minute}:${second}`;
  }

  return str;
}
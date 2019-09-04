/**
 * new Date(String).format("yyyy-MM-dd")
 */
function dateFormatter(date, format) {
  /*
   * eg:format="yyyy-MM-dd hh:mm:ss";
   */
  const o = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds()
  };

  /* eslint-disable */
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (`${date.getFullYear()}`)
      .substr(4 - RegExp.$1.length));
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k]
        : (`00${o[k]}`).substr((`${o[k]}`).length));
    }
  }
  return format;
}


export default function (timestamp, format) {
  const f = format || 'yyyy-MM-dd';
  const d = new Date(timestamp);
  return dateFormatter(d, f);
}

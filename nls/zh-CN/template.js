﻿define(
({
  viewer:{
    main:{
      scaleBarUnits: "metric" //"english (for miles) or "metric" (for km) - don't translate.
    },
    errors:{
      createMap: "无法创建地图",
      general: "错误"
    }
  },
  tools:{
    time: {
      // doc about date and time patterns: http://dojotoolkit.org/reference-guide/dojo/date/locale/format.html
      // yyyy: full year, e.g. 2011
      // MMMM: full month name, e.g. December
      // d: day of month, e.g. 5 or 24 ("dd" would be 05 or 24)
      // h: hours by 0-11, e.g. 6 or 11 ("hh" would be 06 or 11)
      // a: am/pm
      // H: hours by 0-23, e.g. 6 or 23 ("HH" would be 06 or 23)
      // ss: seconds, e.g. 08 or 37 (just "s" would be 8 or 37)
      // SSS: milliseconds, e.g. 006 or 123 (just "S" would be 6 or 123)
      centuryPattern: "yyyy G",
      decadePattern: "yyyy年", 
      yearPattern: "yyyy年MM月",
      weekPattern: "yyyy年M月d日",
      hourTimePattern: "H",
      // e.g. for German: "H:mm:ss:SSS"
      millisecondTimePattern:"h:m:ss.SSS a",
      minuteTimePattern: "H:mm",
      // e.g. for German: "H:mm"
      monthPattern: "yyyy年MM月dd日",
      secondTimePattern: "h:m:s.SSS a",
      timeRange: "<b>时间范围:</b> ${start_time} 至 ${end_time}",
      timeRangeSingle: "<b>时间范围:</b> ${time}"
    },
    legend: {
      label: "图例",
      layerMessage: "无业务图层"
    }
  }
})
);

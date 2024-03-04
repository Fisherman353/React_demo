import _ from "lodash";
import React from "react";

export function paginate(items, pageNumber, pageSize) { //movies, 1, 4
  const startIndex = (pageNumber - 1) * pageSize; // first page : 0 - 3  ; second page : 4 - 7 : third page : 8
  return _(items).slice(startIndex).take(pageSize).value(); //take - limit number of element - 4, everytime it runs it will slice(startIndex) and ends at startIndex + pageSize
}

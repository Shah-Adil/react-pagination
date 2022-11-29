import _ from "lodash";

export function Utils(items ,pageNumber , pageSize ) {
    const starIndex = (pageNumber - 1 ) * pageSize; 
    return _(items).slice(starIndex).take(pageSize).value();
}
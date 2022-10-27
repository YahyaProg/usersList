import _ from "lodash";

export const Paginate = (persons, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(persons).slice(startIndex).take(perPage).value();
};

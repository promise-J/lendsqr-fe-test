export const setDate = (dateStamp: string) => {
  const formattedTimestamp = new Date(dateStamp).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return formattedTimestamp;
};

export function sortPagination(currentPage: number, USERPERPAGE: number) {
  const highRange = currentPage * USERPERPAGE;
  const lowRange = highRange - USERPERPAGE;
  return [lowRange, highRange];
}


// filter data funt
export function filterData(searchText, restaurants) {
   const filterDa = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
   );
   return filterDa;
}

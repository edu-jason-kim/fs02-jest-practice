// 특정 품목 재고 조회하는 함수
export function getStockById(stock, id) {
  return stock.find((item) => item.id === id) || null; // id에 해당하는 품목이 없으면 null 반환
}

// 개수보다 적은 품목들을 배열로 리턴하는 함수
export function getLowStockItems(stock, threshold) {
  return stock.filter((item) => item.qty < threshold);
}

import { getStockById, getLowStockItems } from './stock';

const testStock = [
  { id: 1, name: '삼각 김밥', price: 1200, qty: 3 },
  { id: 2, name: '바나나 우유', price: 1500, qty: 5 },
  { id: 3, name: '컵라면', price: 2500, qty: 10 },
  { id: 4, name: '치킨 너겟', price: 4000, qty: 7 },
  { id: 5, name: '핫바', price: 1500, qty: 12 },
  { id: 6, name: '과자', price: 2000, qty: 20 },
  { id: 7, name: '사이다', price: 1000, qty: 15 },
  { id: 8, name: '콜라', price: 1200, qty: 8 },
  { id: 9, name: '도시락', price: 5000, qty: 4 },
  { id: 10, name: '아이스크림', price: 2500, qty: 9 },
];

describe('getStockById 함수 테스트', () => {
  test('특정 id로 품목 재고 조회', () => {
    const item = getStockById(testStock, 1);
    expect(item).toMatchObject({ id: 1, name: '삼각 김밥', price: 1200, qty: 3 });
  });

  test('없는 품목을 조회하면 null을 리턴', () => {
    const nonExistentItem = getStockById(testStock, 99);
    expect(nonExistentItem).toBeNull();
  });
});

describe('getLowStockItems 함수 테스트', () => {
  test('주어진 개수보다 적은 품목들을 배열로 리턴', () => {
    const lowStockItems = getLowStockItems(testStock, 5);
    expect(lowStockItems).toHaveLength(2);
    expect(lowStockItems).toEqual([
      { id: 1, name: '삼각 김밥', price: 1200, qty: 3 },
      { id: 9, name: '도시락', price: 5000, qty: 4 },
    ]);
  });
});

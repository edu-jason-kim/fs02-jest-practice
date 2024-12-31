import { getGrade } from "./grade"

describe('getGrade 함수', () => {
  test('90점 이상은 A', () => {
    expect(getGrade(90)).toBe('A')
  })
  test('70점 이상은 B', () => {
    expect(getGrade(70)).toBe('B')
  })
  test('50점 이상은 C', () => {
    expect(getGrade(50)).toBe('C')
  })
  test('50점 미만은 F', () => {
    expect(getGrade(40)).toBe('F')
  })
})

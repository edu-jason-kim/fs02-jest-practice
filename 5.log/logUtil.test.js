import { log } from './logUtil';

const consoleSpy = jest.spyOn(console, 'log');

test('원하는 레벨과 메시지로 출력되어야 한다', () => {
  log('error', '파일 로딩 오류');
  expect(consoleSpy).toHaveBeenCalled(); // 호출 확인
  expect(consoleSpy).toHaveBeenCalledWith('[error] 파일 로딩 오류'); // 특정 파라미터로 호출되었는지 확인
});

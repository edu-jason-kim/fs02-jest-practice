import { signup } from './auth';
import { createUser } from './user';
import { sendEmail } from './email';

jest.mock('./user');
jest.mock('./email');

describe('signup 함수 테스트', () => {
  test('회원 가입을 완료하면 유저를 생성하고 이메일을 보낸다', () => {
    const mockUserData = {
      name: '아이유',
      email: 'dlwlrma@codeit.kr',
    };
    createUser.mockReturnValue(mockUserData);
    sendEmail.mockReturnValue(true);

    const result = signup(mockUserData);
    expect(createUser).toHaveBeenCalledWith(mockUserData);
    expect(sendEmail).toHaveBeenCalledWith(
      'no-replay@codeit.kr',
      mockUserData.email,
      '회원 가입을 축하합니다'
    );
    expect(result).toBeTruthy();
  });
});
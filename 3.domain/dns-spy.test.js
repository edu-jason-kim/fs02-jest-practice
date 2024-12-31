import { getDomainIPs } from './dns';

const mockResponse = {
  json: () => ({
    Answer: [{ name: 'codeit.kr.', type: 1, TTL: 300, data: '1.2.3.4' }],
  })
}

describe('getDomainIPs 함수 테스트', () => {
  test('codeit.kr의 IP정보를 가져오고 배열이 존재하는지 확인', async () => {

    const fetchSpy = jest.spyOn(global, 'fetch')
    fetchSpy.mockReturnValue(mockResponse)

    const ips = await getDomainIPs('codeit.kr')
    expect(Array.isArray(ips)).toBe(true)
    expect(ips.length).toBeGreaterThan(0)
    console.log('Fetched IPs:', ips)

    fetchSpy.mockRestore()
  })
})

import { getDomainIPs } from './dns';

describe('getDomainIPs 함수', () => {
  test('codeit.kr의 IP정보를 가져오고 배열이 존재하는지 확인', async () => {
    const ips = await getDomainIPs('codeit.kr')
    
    expect(Array.isArray(ips)).toBe(true)
    expect(ips.length).toBeGreaterThan(0)

    console.log('Fetched IPs:', ips)
  })
})
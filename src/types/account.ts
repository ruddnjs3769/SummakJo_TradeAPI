/* eslint-disable max-len */

// 선택 가능한 은행 목록 조회
// https://github.com/KDT1-FE/KDT5-M5#%EC%84%A0%ED%83%9D-%EA%B0%80%EB%8A%A5%ED%95%9C-%EC%9D%80%ED%96%89-%EB%AA%A9%EB%A1%9D-%EC%A1%B0%ED%9A%8C
export type Banks = EnabledBank[]

interface EnabledBank {
  name: string // 은행 이름
  code: string // 은행 코드
  digits: number[] // 은행 계좌 자릿수
  disabled: boolean // 사용자가 추가한 계좌 여부
}

// 계좌 목록 및 잔액 조회
// https://github.com/KDT1-FE/KDT5-M5#%EA%B3%84%EC%A2%8C-%EB%AA%A9%EB%A1%9D-%EB%B0%8F-%EC%9E%94%EC%95%A1-%EC%A1%B0%ED%9A%8C
export interface AccountsBalance {
  totalBalance: number // 사용자 계좌 잔액 총합
  accounts: Bank[]
}

interface Bank {
  // 사용자 계좌 정보
  id: string // 계좌 ID
  bankName: string // 은행 이름
  bankCode: string // 은행 코드
  accountNumber: string // 계좌 번호
  balance: number // 계좌 잔액
}

// 계좌 연결
// https://github.com/KDT1-FE/KDT5-M5#%EA%B3%84%EC%A2%8C-%EC%97%B0%EA%B2%B0

export interface AccountConnectionRequest {
  bankCode: string // 연결할 은행 코드 (필수!)
  accountNumber: string // 연결할 계좌번호 (필수!)
  phoneNumber: string // 사용자 전화번호 (필수!)
  signature: boolean // 사용자 서명 (필수!)
}

export interface AccountConnectionResponse {
  id: string // 계좌 ID
  bankName: string // 은행 이름
  bankCode: string // 은행 코드
  accountNumber: string // 계좌 번호
  balance: number // 계좌 잔액
}

// 계좌 해지
// https://github.com/KDT1-FE/KDT5-M5#%EA%B3%84%EC%A2%8C-%ED%95%B4%EC%A7%80
// account closure
export interface AccountClouserRequest {
  accountId: string // 계좌 ID (필수!)
  signature: boolean // 사용자 서명 (필수!)
}
export type AccountColuserResponse = boolean

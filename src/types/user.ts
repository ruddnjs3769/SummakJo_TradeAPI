// 사용자 정보 수정
// https://github.com/KDT1-FE/KDT5-M5#%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%A0%95%EB%B3%B4-%EC%88%98%EC%A0%95
export interface EditedUserInfoRequest {
  displayName?: string // 새로운 표시 이름
  profileImgBase64?: string // 사용자 프로필 이미지(base64) - jpg, jpeg, webp, png, gif, svg
  oldPassword?: string // 기존 비밀번호
  newPassword?: string // 새로운 비밀번호
}

export interface EditedUserInfoResponse {
  email: string // 사용자 아이디
  displayName: string // 사용자 표시 이름
  profileImg: string | null // 사용자 프로필 이미지(URL)
}

// 사용자 목록 조회
// https://github.com/KDT1-FE/KDT5-M5#%EC%82%AC%EC%9A%A9%EC%9E%90-%EB%AA%A9%EB%A1%9D-%EC%A1%B0%ED%9A%8C
export type Users = User[]

export interface User {
  email: string // 사용자 아이디
  displayName: string // 사용자 표시 이름
  profileImg: string // 사용자 프로필 이미지 URL
}

// 회원가입
// https://github.com/KDT1-FE/KDT5-M5#%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85
export interface SignUpRequest {
  email: string // 사용자 아이디 (필수!)
  password: string // 사용자 비밀번호, 8자 이상 (필수!)
  displayName: string // 사용자 이름, 20자 이하 (필수!)
  profileImgBase64?: string // 사용자 프로필 이미지(base64) - jpg, jpeg, webp, png, gif, svg
}

export interface SignUpResponse {
  // 회원가입한 사용자 정보
  user: {
    email: string // 사용자 아이디
    displayName: string // 사용자 표시 이름
    profileImg: string | null // 사용자 프로필 이미지(URL)
  }
  accessToken: string // 사용자 접근 토큰
}

// 로그인
// https://github.com/KDT1-FE/KDT5-M5#%EB%A1%9C%EA%B7%B8%EC%9D%B8
export interface SignInRequest {
  email: string // 사용자 아이디 (필수!)
  password: string // 사용자 비밀번호 (필수!)
}

export interface SignInResponse {
  // 회원가입한 사용자 정보
  user: {
    email: string // 사용자 아이디
    displayName: string // 사용자 표시 이름
    profileImg: string | null // 사용자 프로필 이미지(URL)
  }
  accessToken: string // 사용자 접근 토큰
}

// 인증 확인
// https://github.com/KDT1-FE/KDT5-M5#%EC%9D%B8%EC%A6%9D-%ED%99%95%EC%9D%B8
export interface CheckValidUserRequest {
  email: string // 사용자 아이디
  displayName: string // 사용자 표시 이름
  profileImg: string | null // 사용자 프로필 이미지(URL)
}

export interface CheckValidUserResponse {
  email: string // 사용자 아이디
  displayName: string // 사용자 표시 이름
  profileImg: string | null // 사용자 프로필 이미지(URL)
}

// 로그아웃
// https://github.com/KDT1-FE/KDT5-M5#%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83
export type LogoutResponse = boolean

/* eslint-disable max-len */

// 모든 제품 조회
// https://github.com/KDT1-FE/KDT5-M5#%EB%AA%A8%EB%93%A0-%EC%A0%9C%ED%92%88-%EC%A1%B0%ED%9A%8C
export type Products = Product[]

interface Product {
	// 제품 정보
	id: string // 제품 ID
	title: string // 제품 이름
	price: number // 제품 가격
	description: string // 제품 설명(최대 100자)
	tags: string[] // 제품 태그
	thumbnail: string | null // 제품 썸네일 이미지(URL)
	isSoldOut: boolean // 제품 매진 여부
	discountRate: number // 제품 할인율
}

// 전체 거래(판매) 내역
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%84%EC%B2%B4-%EA%B1%B0%EB%9E%98%ED%8C%90%EB%A7%A4-%EB%82%B4%EC%97%AD

export type TransactionDetails = TransactionDetail[] // 모든 거래 내역의 목록

interface TransactionDetail {
	// 거래 내역 정보
	detailId: string // 거래 내역 ID
	user: {
		// 거래한 사용자 정보
		email: string
		displayName: string
		profileImg: string | null
	}
	account: {
		// 거래한 사용자의 계좌 정보
		bankName: string
		bankCode: string
		accountNumber: string
	}
	product: {
		// 거래한 제품 정보
		productId: string
		title: string
		price: number
		description: string
		tags: string[]
		thumbnail: string | null
		discountRate: number
	}
	reservation: Reservation | null // 거래한 제품의 예약 정보
	timePaid: string // 제품을 거래한 시간
	isCanceled: boolean // 거래 취소 여부
	done: boolean // 거래 완료 여부
}

interface Reservation {
	start: string // 예약 시작 시간
	end: string // 예약 종료 시간
	isCanceled: boolean // 예약 취소 여부
	isExpired: boolean // 예약 만료 여부
}

// 거래(판매) 내역 완료/취소 및 해제
// https://github.com/KDT1-FE/KDT5-M5#%EA%B1%B0%EB%9E%98%ED%8C%90%EB%A7%A4-%EB%82%B4%EC%97%AD-%EC%99%84%EB%A3%8C%EC%B7%A8%EC%86%8C-%EB%B0%8F-%ED%95%B4%EC%A0%9C
export interface TransactionCancelRequest {
	isCanceled?: boolean // 거래 취소 여부 (사용자의 '제품 거래(구매) 취소' 상태와 같습니다)
	done?: boolean // 거래 완료 여부 (사용자의 '제품 거래(구매) 확정' 상태와 같습니다)
}
export type TransactionCancelResponse = boolean

// 제품 추가
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EC%B6%94%EA%B0%80
export interface AddProductRequest {
	title: string // 제품 이름 (필수!)
	price: number // 제품 가격 (필수!)
	description: string // 제품 상세 설명 (필수!)
	tags?: string[] // 제품 태그
	thumbnailBase64?: string // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
	photoBase64?: string // 제품 상세 사진(base64) - jpg, jpeg, webp, png, gif, svg
	discountRate?: number // 제품 할인율
}
export interface AddProductResponse {
	id: string // 제품 ID
	title: string // 제품 이름
	price: number // 제품 가격
	description: string // 제품 상세 설명
	tags: string[] // 제품 태그
	thumbnail: string | null // 제품 썸네일 이미지(URL)
	photo: string | null // 제품 상세 이미지(URL)
	isSoldOut: boolean // 제품 매진 여부
	discountRate: number // 제품 할인율
}

// 제품 수정
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EC%88%98%EC%A0%95
export interface EditProductRequest {
	title?: string // 제품 이름
	price?: number // 제품 가격
	description?: string // 제품 상세 설명
	tags?: string[] // 제품 태그
	thumbnailBase64?: string // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
	photoBase64?: string // 제품 상세 사진(base64) - jpg, jpeg, webp, png, gif, svg
	isSoldOut?: boolean // 제품 매진 여부
	discountRate?: number // 제품 할인율
}
export interface EditProductResponse {
	id: string // 제품 ID
	title: string // 제품 이름
	price: number // 제품 가격
	description: string // 제품 상세 설명
	tags: string[] // 제품 태그
	thumbnail: string | null // 제품 썸네일 이미지(URL)
	photo: string | null // 제품 상세 이미지(URL)
	isSoldOut: boolean // 제품 매진 여부
	discountRate: number // 제품 할인율
}

// 제품 삭제
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EC%82%AD%EC%A0%9C
export type DeleteProductResponse = boolean

// 단일 제품 상세 조회
// https://github.com/KDT1-FE/KDT5-M5#%EB%8B%A8%EC%9D%BC-%EC%A0%9C%ED%92%88-%EC%83%81%EC%84%B8-%EC%A1%B0%ED%9A%8C
export interface ProductDetail {
	// 제품의 상세 내용
	id: string // 제품 ID
	title: string // 제품 이름s
	price: number // 제품 가격
	description: string // 제품 상세 설명
	tags: string[] // 제품 태그
	thumbnail: string | null // 제품 썸네일 이미지(URL)
	photo: string | null // 제품 상세 이미지(URL)
	isSoldOut: boolean // 제품 매진 여부
	reservations: Reservation[] // 제품의 모든 예약 정보 목록
	discountRate: number // 제품 할인율
}

// 제품 검색
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EA%B2%80%EC%83%89
export interface SearchProductsRequest {
	searchText?: string // 검색할 제품 이름
	searchTags?: string[] // 검색할 제품 태그s
}
export type SearchProductsResponse = Omit<Product, 'isSoldOut'>[] // 관리하는 모든 제품의 목록

// 제품 거래(구매) 신청
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EA%B1%B0%EB%9E%98%EA%B5%AC%EB%A7%A4-%EC%8B%A0%EC%B2%AD
export interface TransactionReservationRequest {
	productId: string // 거래할 s ID (필수!)
	accountId: string // 결제할 사용자 계좌 ID (필수!)
	reservation?: {
		// 예약 정보(예약 시스템을 사용하는 경우만 필요)
		start: string // 예약 시작 시간(ISO)
		end: string // 예약 종료 시간(ISO)
	}
}
export type TransactionReservationResponse = boolean

// 제품 거래(구매) 취소
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EA%B1%B0%EB%9E%98%EA%B5%AC%EB%A7%A4-%EC%B7%A8%EC%86%8C
export interface TransactionCancelRequest {
	detailId: string // 취소할 제품의 거래 내역 ID
}
// TransactionCancelResponse는 거래(판매) 내역 완료/취소 및 해제를 참고하세요

// 제품 거래(구매) 확정
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EA%B1%B0%EB%9E%98%EA%B5%AC%EB%A7%A4-%ED%99%95%EC%A0%95
export interface TransactionRequest {
	detailId: string // 거래(구매) 확정할 제품의 거래 내역 ID
}
export type TransactionResponse = boolean

// 제품 전체 거래(구매) 내역
// https://github.com/KDT1-FE/KDT5-M5#%EC%A0%9C%ED%92%88-%EC%A0%84%EC%B2%B4-%EA%B1%B0%EB%9E%98%EA%B5%AC%EB%A7%A4-%EB%82%B4%EC%97%AD
export type UserTransactionDetails = UserTransactionDetail[] // 모든 거래 내역의 목록

export interface UserTransactionDetail {
	// 거래 내역 정보
	detailId: string // 거래 내역 ID
	product: {
		// 거래한 제품 정보
		productId: string
		title: string
		price: number
		description: string
		tags: string[]
		thumbnail: string | null
		discountRate: number // 제품 할인율
	}
	reservation: Reservation | null // 거래한 제품의 예약 정보
	timePaid: string // 제품을 거래한 시간
	isCanceled: boolean // 거래 취소 여부
	done: boolean // 거래 완료 여부
}

// 단일 제품 상세 거래(구매) 내역
// https://github.com/KDT1-FE/KDT5-M5#%EB%8B%A8%EC%9D%BC-%EC%A0%9C%ED%92%88-%EC%83%81%EC%84%B8-%EA%B1%B0%EB%9E%98%EA%B5%AC%EB%A7%A4-%EB%82%B4%EC%97%AD

export interface UserTransctionDetailRequest {
	detailId: string // 상세 내용을 확인할 거래(구매) 내역 ID
}
export interface UserTransactionDetailResponse {
	// 상세 거래 정보
	detailId: string // 거래 내역 ID
	account: {
		// 거래한 사용자의 계좌 정보
		bankName: string
		bankCode: string
		accountNumber: string
	}
	product: {
		// 거래한 제품 정보
		productId: string
		title: string
		price: number
		description: string
		tags: string[]
		thumbnail: string | null
		photo: string | null
		discountRate: number // 제품 할인율
	}
	reservation: Reservation | null // 거래한 제품의 예약 정보
	timePaid: string // 제품을 거래한 시간
	isCanceled: boolean // 거래 취소 여부
	done: boolean // 거래 완료 여부
}

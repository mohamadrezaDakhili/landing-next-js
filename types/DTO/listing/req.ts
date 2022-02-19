export interface ILandingListingListReqDto {
	page?: number;
	limit?: number;
	max_price?: number;
	min_price?: number;
	max_follower?: number;
	min_follower?: number;
	date_joined?: null | string;
	category?: any;
	top_country?: string;
	top_city?: string;
	sortBy?: string;
	sortType?: string;
	original_email?: boolean;
	min_date_joined?: string | null;
	max_date_joined?: string | null;
	min_women_percent?: string | null;
	min_men_percent?: string | null;
	seller_id?: string;
}

export interface ILandingListingDetailReqDto {
	_id: string;
}
export interface IInstagramCountriesReqDto {
	q?: string;
	page?: number;
	limit?: string;
}
export interface IInstagramCitiesReqDto {
	q?: string;
	page?: number;
	limit?: string;
	country?: any;
}
export interface IRecentlySoldReqDto {
	limit?: number;
	page?: number;
	from_date?: number;
	to_date?: number;
}

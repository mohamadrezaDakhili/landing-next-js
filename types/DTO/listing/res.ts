import { IMainResponseDto, IMainResponseMetaDto } from "./mainResponseDto";

export interface ILandingListingListDOC {
	'_id': string;
	'pic': string;
	'buyable': boolean;
	'followers': number;
	'username'?: string;
	'price': number;
	'category': string;
	'top_country': { percent: number; name: string; code: string; slug: string };
	'men_percent': string | null;
	'women_percent': string | null;
	'date_joined'?: string;
	'original_email': number;
	'grade': number;
	'grade_createdAt': string;
	'grade_text': string;
	'grade_ttl': string;
}

export interface ILandingListingListResDto extends IMainResponseDto {
	'listings': IMainResponseMetaDto & { 'docs': ILandingListingListDOC[] };
}

export interface ILandingListingDetailResDto extends IMainResponseDto {
	'_id': string;
	'buyable': boolean;
	'category': string;
	'owner': {
		'is_owner': boolean;
		'name': string;
		'family': string;
		'username': string;
		'_id'?: string;
		'avatar': string;
		'success_escrows': number;
		createdAt: string;
	};
	'pic': string;
	'username': string;
	'verified': false;
	'followers': number;
	'price': number;
	'original_email': number;
	'posts': { 'all': number; 'pictures': number; 'igtvs': number; 'videos': number; 'slides': number };
	'averages': { 'avg_likes': number; 'avg_view': number; 'avg_comments': number; 'avg_post': number };
	'date_joined': string;
	'date_of_first_post': string;
	'besties': {
		'mostly_liked': { 'url': string; 'likes': number };
		'mostly_viewed': { 'url': string; 'views': number };
		'mostly_commented': { 'url': string; 'comments': number };
		'hashtags': string[];
		'mentions': string[];
	};
	'gender': { 'men_percent': number; 'women_percent': number };
	'age_range': { '_id': string; 'min': number; 'max': number; 'percent': number }[];
	'top_countries': {
		'_id': string;
		'name': string;
		'code': string;
		'slug': string;
		'percent': number;
	}[];
	'top_cities': { percent: number; name: string; code: string; slug: string; _id: string }[];
	'description': string;
	'screen_shot': {
		number: number;
		src: string;
		_id: string;
	}[];
	'statics': { 'createdAt': string; 'views': number };
	status: string;
	status_key: number;
	'grade': number;
	'grade_text': string;
	'grade_ttl': string;
	'grade_createdAt': string;
	post_list: {
		caption: string;
		comment: number;
		id: string;
		like: number;
		mention: string[];
		pic: string;
		taken_at: string;
		type: number;
		view: number;
		_id: string;
	}[];
}

export interface ILandingListingRecentlySoldListDOC {
	'_id': string;
	'followers': number;
	'price': number;
	'sold_price': number;
	'catrgory': string;
	'top_country': {
		'name': string;
		'code': string;
		'percent': number;
	};
	'men_percent': number;
	'women_percent': number;
	'original_email': number;
	'createdAt': string;
	'soldAt': string;
}

export interface ILandingListingRecentlySoldListResDto extends IMainResponseDto {
	'listings': IMainResponseMetaDto & {
		'docs': ILandingListingRecentlySoldListDOC[];
	};
}

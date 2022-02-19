export interface IMainResponseDto {
	detail?: string;
}

export interface IMainResponseMetaDto {
	limit: number;
	page: number;
	totalDocs: number;
	totalPages: number;
	pagingCounter: number;
	hasNextPage?: boolean;
	hasPrevPage?: boolean;
}

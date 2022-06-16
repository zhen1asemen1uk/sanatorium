export interface ServicesReducer {
	services: {
		id: number;
		name: string;
		cost: number;
		description: string;
	}[];
	isLoading: boolean;
	isError: boolean | string;
}

export interface ApartmentsReducer {
	apartments: {
		id: number;
		name: string;
		cost: number;
		description: string;
	}[];
	isLoading: boolean;
	isError: boolean | string;
}

export interface Test {
	name: string;
	age: number;
}

export interface MainLayoutProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	robots?: string;
	keywords?: string;
}

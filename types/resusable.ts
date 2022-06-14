export interface ButtonProps {
	onClick: () => void;
	word: string;

	pos?: string;
	pos_T?: string;
	pos_L?: string;
	pos_R?: string;
	pos_B?: string;

	secondary?: boolean;

	h?: string;
	w?: string;
	p?: string;
	m?: string;

	disabled?: string;
	bgColor?: string;
	as: string;
	type: string;
}

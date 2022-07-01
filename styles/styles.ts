import styled from 'styled-components';

export const FlexBlock = styled.div`
	${({ pos }) => pos && `position: ${pos}`};
	${({ pos_T }) => pos_T && `top: ${pos_T}`};
	${({ pos_L }) => pos_L && `left: ${pos_L}`};
	${({ pos_R }) => pos_R && `right: ${pos_R}`};
	${({ pos_B }) => pos_B && `bottom: ${pos_B}`};

	display: ${({ d }) => d || `flex`};
	flex-direction: ${({ fd }) => fd || `row`};
	${({ jc }) => jc && `justify-content:${jc}`};
	${({ ai }) => ai && `align-items:${ai}`};

	${({ p }) => p && `padding: ${p}`};
	${({ m }) => m && `margin: ${m}`};

	${({ w }) => w && `width: ${w}`};
	${({ minW }) => minW && `min-width: ${minW}`};
	${({ maxW }) => maxW && `max-width: ${maxW}`};

	${({ h }) => h && `height: ${h}`};
	${({ minH }) => minH && `min-height: ${minH}`};
	${({ maxH }) => maxH && `max-height: ${maxH}`};

	${({ bg }) => bg && `background: ${bg}`};
`;

export const Wrapp = styled(FlexBlock)`
	flex-direction: ${({ fd }) => fd || `column`};
`;

export const Row = styled(FlexBlock)``;

export const Col = styled(FlexBlock)`
	flex-direction: ${({ fd }) => fd || `column`};
`;

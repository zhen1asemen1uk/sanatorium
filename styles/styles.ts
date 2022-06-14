import styled from 'styled-components';

export const Wrapp = styled.div`
	display: flex;
	flex-direction: ${({ fd }) => fd || `column`};
	${({ jc }) => jc && `justify-content:${jc}`};
	${({ ai }) => ai && `align-items:${ai}`};

	${({ p }) => p && `padding: ${p}`};
	${({ m }) => m && `margin: ${m}`};

	${({ h }) => h && `height: ${h}`};
	${({ minH }) => minH && `min-height: ${minH}`};
	${({ maxH }) => maxH && `max-height: ${maxH}`};

	${({ bg }) => bg && `background: ${bg}`};
`;

export const Row = styled.div`
	${({ pos }) => pos && `position: ${pos}`};
	${({ pos_T }) => pos_T && `top: ${pos_T}`};
	${({ pos_L }) => pos_L && `left: ${pos_L}`};
	${({ pos_R }) => pos_R && `right: ${pos_R}`};
	${({ pos_B }) => pos_B && `bottom: ${pos_B}`};

	display: flex;
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

export const Col = styled.div`
	${({ pos }) => pos && `position: ${pos}`};
	${({ pos_T }) => pos_T && `top: ${pos_T}`};
	${({ pos_L }) => pos_L && `left: ${pos_L}`};
	${({ pos_R }) => pos_R && `right: ${pos_R}`};
	${({ pos_B }) => pos_B && `bottom: ${pos_B}`};

	display: flex;
	flex-direction: ${({ fd }) => fd || `column`};
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

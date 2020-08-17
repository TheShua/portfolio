import React, { useState, useEffect } from 'react';
import themeVar from 'utils/style-variables';
import styled from 'styled-components';
import plan1 from 'header/plan_11.png';
import plan2 from 'header/plan_12.png';
import plan3 from 'header/plan_14.png';
import plan4 from 'header/plan_16.png';
import plan5 from 'header/plan_17.png';
import plan6 from 'header/plan_18.png';
import gradTop from 'header/gradient_top.png';
const plans = [
	{ url: plan1, addOff: 0 },
	{ url: plan2, addOff: 0 },
	{ url: plan3, addOff: 0 },
	{ url: plan4, addOff: 0 },
	{ url: plan5, addOff: 0 },
	{ url: plan6, addOff: 0 },
];

const Heading = styled.header`
	background: linear-gradient(${themeVar.appBackground}, ${themeVar.background});
	margin-top: 1em;
	h1 {
		font-size: 4.5em;
		text-align: center;
		font-family: 'Spartan', sans-serif;
		font-weight: 900;
		text-shadow: 0 0 0.2em #000000aa;
		color: white;
	}
	h2 {
		color: white;
		font-size: 2em;
		text-align: center;
	}
`;

const ParallaxBox = styled.div`
	position: relative;
	margin: 0 auto;
	width: 85%;
	background: white;
	height: 1000px;
	overflow: hidden;
`;

const Plan = styled.div`
	background: url(${(props) => plans[props.nb - 1].url}) center;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: ${(props) => props.zindex || 0};
`;

const PlanTxt = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: grid;
	place-items: center;
	z-index: ${(props) => props.zindex || 500};

	h1 em {
		display: block;
		font-size: 0.4em;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
	}
`;

const Gradient = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: 100000;
	left: 0;

	&.top {
		top: 0;
		background: url(${gradTop}) no-repeat;
	}
	&.bot {
		bottom: 0;
		background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)) repeat-y;
	}
`;

const Header = () => {
	const [offsets, setOffsets] = useState([0, 0, 0, 0, 0, 0, 0]);
	useEffect(() => {
		const lerp = (start, end, amt) => {
			return (end - start) * amt;
		};

		const handleScroll = () => {
			let offset = window.pageYOffset;
			let newOffsets = [...offsets];
			for (let i = 0; i < plans.length; i++) {
				newOffsets[i] = lerp(newOffsets[i], offset * ((i + plans[i].addOff) * 1.5) * 0.07, 0.5);
			}
			setOffsets(newOffsets);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [offsets]);

	return (
		<Heading>
			<ParallaxBox>
				<Gradient className="top" />
				<PlanTxt>
					<h1>
						GUILLAUME DE GLISEZINSKI
						<em>FULLSTACK WEBDEVELOPER</em>
					</h1>
				</PlanTxt>
				{[...plans].reverse().map((plan, i) => {
					return (
						<Plan
							nb={plans.length - i}
							key={i}
							zindex={i * 10}
							style={{ backgroundPositionY: -offsets[plans.length - i] + 'px' }}
						/>
					);
				})}
			</ParallaxBox>
		</Heading>
	);
};

export default Header;

import React, { useState } from 'react';
import themeVar from 'utils/style-variables';
import { Element } from 'react-scroll';
import { ReactComponent as Html5 } from 'logos/html-5.svg';
import { ReactComponent as Css } from 'logos/css-3.svg';
import { ReactComponent as Javascript } from 'logos/es6.svg';
import { ReactComponent as Sass } from 'logos/sass.svg';
import { ReactComponent as ReactSvg } from 'logos/react.svg';
import { ReactComponent as Node } from 'logos/nodejs-icon.svg';
import { ReactComponent as Express } from 'logos/express.svg';
import { ReactComponent as MongoDB } from 'logos/mongodb.svg';
import { ReactComponent as MySQL } from 'logos/mysql.svg';
import { ReactComponent as Heroku } from 'logos/heroku-icon.svg';
import { ReactComponent as Git } from 'logos/git-icon.svg';
import { ReactComponent as Github } from 'logos/github-icon.svg';
import { ReactComponent as Unity } from 'logos/unity.svg';
import { ReactComponent as CSharp } from 'logos/c-sharp.svg';
import { ReactComponent as Photoshop } from 'logos/adobephotoshop.svg';
import { ReactComponent as Illustrator } from 'logos/adobeillustrator.svg';
import { ReactComponent as After } from 'logos/adobeaftereffects.svg';
import { ReactComponent as Premiere } from 'logos/adobepremierepro.svg';
import { ReactComponent as Autodesk } from 'logos/autodesk.svg';
import styled from 'styled-components';

const Section = styled.section``;
const SkillsContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const Skill = styled.div`
	display: flex;

	ul {
		background: ${themeVar.littleBack}44;
		display: flex;
		justify-content: space-around;
		width: 0%;
		height: 0;
		overflow: none;
		visibility: hidden;

		&.clicked {
			width: 100%;
			height: 100px;
			visibility: visible;
		}

		li {
			text-align: center;
			display: flex;
			flex-direction: column;

			svg {
				max-width: 70px;
				max-height: 100px;
				margin: 2em 0;
			}
		}
	}

	h5 {
		color: ${themeVar.subTitle};
		height: 80px;
		width: 20%;
		background: ${themeVar.littleBack}99;
		display: grid;
		place-items: center;
		margin: 1em;
		padding: 1em;
		border-radius: 10px;
	}
`;

const AboutMe = () => {
	const [toggleSkills, setToggleSkills] = useState([false, false, false]);

	const showList = (event) => {
		let update = [...toggleSkills];
		switch (event) {
			case 'front':
			default:
				update[0] = !update[0];
				break;
			case 'back':
				update[1] = !update[1];
				break;
			case 'misc':
				update[2] = !update[2];
				break;
		}

		setToggleSkills(update);
	};

	return (
		<Section>
			<Element name="About">
				<h3>About Me</h3>
			</Element>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eos quo, in magnam, maiores dicta nobis
				minus cumque voluptates ab dolores pariatur? Ea quas a, reprehenderit praesentium fugiat non repellat.
			</p>
			<h4>SKills</h4>
			<SkillsContent>
				<Skill>
					<h5 onClick={() => showList('front')}>FRONTEND</h5>
					<ul className={toggleSkills[0] ? 'clicked' : ''}>
						<li>
							<Html5 />
							HTML5
						</li>
						<li>
							<Css />
							CSS3
						</li>
						<li>
							<Javascript />
							ES6
						</li>
						<li>
							<Sass />
							SASS
						</li>
						<li>
							<ReactSvg />
							ReactJS
							<ul>
								<li>Styled components</li>
								<li>Redux</li>
							</ul>
						</li>
					</ul>
				</Skill>
				<Skill>
					<h5 onClick={() => showList('back')}>BACK END</h5>
					<ul className={toggleSkills[1] ? 'clicked' : ''}>
						<li>
							<Node />
							NodeJS
						</li>
						<li>
							<Express />
							Express
							<ul>
								<li>Handlebars</li>
							</ul>
						</li>
						<li>
							<MongoDB />
							MongoDB
						</li>
						<li>
							<MySQL />
							MySQL
						</li>
					</ul>
				</Skill>
				<Skill>
					<h5 onClick={() => showList('misc')}>OTHER</h5>
					<ul className={toggleSkills[2] ? 'clicked' : ''}>
						<li>
							<Heroku />
							Heroku
						</li>
						<li>
							<Git />
							Git
						</li>
						<li>
							<Github />
							GitHub
						</li>
						<li>
							<Photoshop />
							Photoshop
						</li>
						<li>
							<Illustrator />
							Illustrator
						</li>
						<li>
							<Premiere />
							Premiere Pro
						</li>
						<li>
							<After />
							After Effects
						</li>
						<li>
							<Unity />
							Unity
						</li>
						<li>
							<CSharp />
							C#
						</li>
						<li>
							<Autodesk />
							Maya
						</li>
						<li>
							<Autodesk />
							3D Studio Max
						</li>
						<li>Zbrush</li>
					</ul>
				</Skill>
			</SkillsContent>
		</Section>
	);
};

export default AboutMe;

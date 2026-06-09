import React, { useContext } from 'react'
import { AppCtxStore } from '../../App.context'

const Resume = () => {
	const { vocabulary } = useContext(AppCtxStore)

	return (
		<section id="resume">
			<div className="row education">
				<div className="three columns header-col">
					<h1>
						<span>{vocabulary.education}</span>
					</h1>
				</div>
				<div className="nine columns main-col">
					{vocabulary.education_elements.map((e, k) => (
						<div className="row item" key={`education${k}`}>
							<div className="twelve columns">
								<h3>{e.name}</h3>
								<p className="info">
									{e.state} <span>•</span> <em className="date">{e.date}</em>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="row work">
				<div className="three columns header-col">
					<h1>
						<span>{vocabulary.work}</span>
					</h1>
				</div>
				<div className="nine columns main-col">
					{vocabulary.work_elements.map((e, k) => (
						<div className="row item" key={`work-${k}`}>
							<div className="twelve columns">
								<h3>{e.name}</h3>
								<p className="info">
									{e.role} <span>•</span>{' '}
									<em className="date">
										{e.date_start} - {e.date_to}
									</em>
								</p>
								<p className="break-word">{e.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>{vocabulary.skills}</span>
					</h1>
				</div>
				<div className="nine columns main-col">
					<p>{vocabulary.skills_description}</p>
					<div className="bars">
						<ul className="skills">
							<li>
								<span className="bar-expand reactjs" />
								<em>ReactJS</em>
							</li>
							<li>
								<span className="bar-expand javascript" />
								<em>Javascript / NodeJS</em>
							</li>
							<li>
								<span className="bar-expand graphql" />
								<em>GraphQL / Apollo Framework</em>
							</li>
							<li>
								<span className="bar-expand typescript" />
								<em>Typescript / Angular</em>
							</li>
							<li>
								<span className="bar-expand bootstrap" />
								<em>Bootstrap Framework</em>
							</li>
							<li>
								<span className="bar-expand php" />
								<em>PHP</em>
							</li>
							<li>
								<span className="bar-expand html" />
								<em>HTML & CSS</em>
							</li>
							<li>
								<span className="bar-expand testing" />
								<em>Testing / Debugging</em>
							</li>
							<li>
								<span className="bar-expand electron" />
								<em>Electron</em>
							</li>
							<li>
								<span className="bar-expand vscode" />
								<em>VS Code</em>
							</li>
							<li>
								<span className="bar-expand sql" />
								<em>SQL Database</em>
							</li>
							<li>
								<span className="bar-expand jquery" />
								<em>jQuery</em>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Resume

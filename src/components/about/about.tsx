import React, { useContext } from 'react'
import ReactStringReplace from 'react-string-replace'
import { AppCtxStore } from '../../App.context'

const About = (): JSX.Element | null => {
	const appCtx = useContext(AppCtxStore)
	if (!appCtx) return null
	const { vocabulary } = appCtx

	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img className="profile-pic" src="images/profilepic.jpg" alt="Profile" />
				</div>
				<div className="nine columns main-col">
					<h2>{vocabulary.about_me}</h2>
					<p>
						{ReactStringReplace(vocabulary.about_me_description, /#/g, (match, i) => (
							<br key={`break-${i}`} />
						))}
					</p>
					<div className="row">
						<div className="columns contact-details">
							<h2>{vocabulary.contact_details}</h2>
							<p className="address">
								<span>{vocabulary.contact_address_name}</span>
								<br />
								<span>{vocabulary.contact_address_location}</span>
								<br />
								<span>{vocabulary.contact_address_email}</span>
								<br />
								<span>{vocabulary.contact_address_phone}</span>
								<br />
							</p>
						</div>
						<div className="columns download">
							<p>
										<a href={vocabulary.download_resume_link} className="button no-print" download>
									<i className="fa fa-download" />{vocabulary.download_resume}
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About


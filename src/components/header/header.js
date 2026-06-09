import React, { useContext } from 'react'
import ReactStringReplace from 'react-string-replace'
import { AppCtxStore } from '../../App.context'

const Header = () => {
	const { vocabulary, languages, setLanguage } = useContext(AppCtxStore)

	return (
		<header id="home">
			<nav id="nav-wrap" className="no-print">
				{/* eslint-disable-next-line*/}
				<a className="mobile-btn" href="#nav-wrap" title={vocabulary.show_navigation}>
					{vocabulary.show_navigation}
				</a>
				{/* eslint-disable-next-line*/}
				<a className="mobile-btn" href="#" title={vocabulary.hide_navigation}>
					{vocabulary.hide_navigation}
				</a>
				<ul id="nav" className="nav no-print">
					{/* eslint-disable-next-line*/}
					<li className="current">
						<a className="smoothscroll" href="#home">
							{vocabulary.home}
						</a>
					</li>
					{/* eslint-disable-next-line*/}
					<li>
						<a className="smoothscroll" href="#about">
							{vocabulary.about}
						</a>
					</li>
					{/* eslint-disable-next-line*/}
					<li>
						<a className="smoothscroll" href="#resume">
							{vocabulary.resume}
						</a>
					</li>
					{/* eslint-disable-next-line*/}
					<li>
						<a className="smoothscroll" href="#portfolio">
							{vocabulary.works}
						</a>
					</li>
					{/* eslint-disable-next-line*/}
					<li>
						<a className="smoothscroll" href="#testimonials">
							{vocabulary.testimonials}
						</a>
					</li>
					<li className="no-print">
						{/* eslint-disable-next-line*/}
						<a>
							<select
								onChange={(event) => setLanguage(event.target.value)}
								className="language_select"
							>
								{languages.map((language, k) => (
									<option
										value={language.language_code}
										key={`language-${k}`}
										className="language_select"
									>
										{language.language_info}
									</option>
								))}
							</select>
						</a>
					</li>
				</ul>
			</nav>
			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline">{vocabulary.homeTitle}</h1>
					<h3>
						{ReactStringReplace(vocabulary.homeDescription, /@(\w+)/g, (match, i) => (
							<span key={`${match}${i}`}>{match}</span>
						))}
					</h3>
					<hr />
					<ul className="social no-print">
						<li>
							<a href="https://www.facebook.com/nello1997">
								<i className="fa fa-facebook" />
							</a>
						</li>
						<li>
							<a href="https://wa.me/+393457086780">
								<i className="fa fa-whatsapp" />
							</a>
						</li>
						<li>
							<a href="https://github.com/Nek97">
								<i className="fa fa-github" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/devnek97/">
								<i className="fa fa-linkedin" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/nek97/">
								<i className="fa fa-instagram" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<p className="scrolldown no-print">
				<a className="smoothscroll" href="#about">
					<i className="icon-down-circle" />
				</a>
			</p>
		</header>
	)
}

export default Header

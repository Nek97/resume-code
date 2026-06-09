import React, { useContext } from 'react'
import { AppCtxStore } from '../../App.context'

const Testimonials = (): JSX.Element | null => {
	const appCtx = useContext(AppCtxStore)
	if (!appCtx) return null
	const { vocabulary } = appCtx

	return (
		<section id="testimonials" className="no-print">
			<div className="text-container">
				<div className="row">
					<div className="two columns header-col">
						<h1>
							<span>{vocabulary.client_testimonials}</span>
						</h1>
					</div>
					<div className="ten columns flex-container">
						<div className="flexslider">
							<ul className="slides">
								{vocabulary.testimonials_elements.map((e, k) => (
									<li key={`testimonials-${k}`}>
										<blockquote>
											<p>{e.description}</p>
											<cite>{e.from}</cite>
										</blockquote>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials

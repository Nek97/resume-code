import React, { useContext } from 'react'
import { AppCtxStore } from '../../App.context'

const Portfolio = () => {
	const { vocabulary } = useContext(AppCtxStore)

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>{vocabulary.check_out_works}</h1>
					<div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						{vocabulary.works_elements.map((e, k) => (
							<div className="columns portfolio-item" key={`portfolio_element_${k}`}>
								<div className="item-wrap">
									{/* eslint-disable-next-line*/}
									<a href={`#modal-${k}`} title={vocabulary.portfolio_view_title}>
										<img alt="" src={e.icon} />
										<div className="overlay">
											<div className="portfolio-item-meta">
												<h5>{e.name}</h5>
												<p>{e.role}</p>
											</div>
										</div>
										<div className="link-icon">
											<i className="icon-plus" />
										</div>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
				{vocabulary.works_elements.map((e, k) => (
					<div id={`modal-${k}`} key={`modal-${k}`} className="popup-modal mfp-hide">
						<img className="scale-with-grid" src={e.image} alt="" />
						<div className="description-box">
							<h4>{e.name}</h4>
							<p>{e.description}</p>
							<span className="categories">
								<i className="fa fa-tag" />
								{e.used.map((usedName, idx) => (idx ? `, ${usedName}` : usedName))}
							</span>
						</div>
						<div className="link-box">
							{/* eslint-disable-next-line*/}
							<a href={e.details}>{vocabulary.details}</a>
							{/* eslint-disable-next-line*/}
							<a className="popup-modal-dismiss">{vocabulary.close}</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Portfolio

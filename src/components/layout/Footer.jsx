import React from 'react';

const Footer = () => {

	const Footerstyle= {
		height: "100%",
		position: "relative",
		minHeight: "24vh",
	}
	return(

		<div>
			<div className="row">
				<div className="col-md-12">
					<div className="page-footer pt-5 mt-5 text-center bg-dark text-light" style={Footerstyle}>
						Made by:&nbsp; 
						<span className="text-warning font-weight-normal">
							 <a href="https://goofy-shirley-707d84.netlify.com"
							 target="_blank"  
							 rel="noopener noreferrer">
							 	Kozhemiakin Mykyta
							 </a>
						</span>
						, using React.js, Redux.js and API 
						 <a href="http://www.omdbapi.com/" target="_blank"  rel="noopener noreferrer">
							OMDB
						</a>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Footer;
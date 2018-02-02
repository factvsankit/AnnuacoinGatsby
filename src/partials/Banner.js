import React from "react";
import css from "styled-components";
import { color } from "../utils";

import Container from "../components/Container/"
import BannerBackBg from "../pages/assets/images/bannerImage.png";
import BannerContentImage from "../pages/assets/images/bannerContent.png";


const BannerSection = css.section`

	background-image: url(${BannerBackBg});
	background-size: cover;
	background-position: center;
	height:70vh;
	position: relative;

`;

const BannerContent = css.div`

	position:absolute;
	top: 0;
	right:0;
	left:0;
	bottom: 0;
	z-index: 1;

`;

const BannerTitle = css.h1`

	font-size: 25px;
	color: #FFFFFF;
	letter-spacing: 0;
	margin-bottom: 10px;

`;

const BannerPara = css.p`

opacity: 0.7;
font-size: 16px;
color: #DBE1ED;
letter-spacing: 0.5px;
line-height: 25px;

`;

const Banner = props => (

<BannerSection>
	<BannerContent>
		<div className="myTable">
			<div className="table-cell va-bottom">
				<Container>
					<div className="myTable fixed-table-layout">
						<div className="table-cell va-middle">
							<BannerTitle>Have you ever worked in USA?</BannerTitle>
							<BannerPara>If you worked in USA on a holiday/work visa you may have thousands in unclaimed superannuation waiting!</BannerPara>
						</div>
						<div className="table-cell va-bottom">
							 <img src={`${BannerContentImage}`} className="img-responsive"/>
						</div>
					</div>
				</Container>
			</div>
		</div>
	</BannerContent>
</BannerSection>

);

Banner.defaultProps = {};

export default Banner;
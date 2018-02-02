import React from 'react'
import Link from 'gatsby-link'
import { func } from "prop-types";
import css from "styled-components";


import { color } from "../utils";

import Container from "../components/Container/";
import Banner from "../partials/Banner";


const ArchitectureTitle = css.h1`
  color: ${color.philGreen};
`;

const IndexPage = () => (
  <div>
  <Banner>

  </Banner>
  </div>
)

export default IndexPage

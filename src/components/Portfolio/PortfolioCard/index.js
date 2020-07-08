import React from "react"
import { Link } from '@reach/router'
// Icons
import DateIcon from "../../../images/Calendar.svg"
// Styles
import {
  CardWrapper,
  ImgWrapper,
  TextWrapper,
  StatWrapper,
  DateWrapper,
  ViewWorkWrapper,
} from "./PortfolioCard.styles"

const PortfolioCard = ({ slug, title, date, excerpt, imageUrl, subtitle }) => (
  <CardWrapper>
    <a href={slug} target="_blank" rel="noopener noreferrer">
      <ImgWrapper>
        <h6>{subtitle}</h6>
        <h2>{title}</h2>
        <ViewWorkWrapper>
          View Work >
        </ViewWorkWrapper>
      </ImgWrapper>
    </a>
    <TextWrapper>
      <StatWrapper>
        <DateWrapper>
          <img src={DateIcon} alt="Date icon" />
          {date}
        </DateWrapper>
      </StatWrapper>
      <p>{excerpt}</p>
    </TextWrapper>
    
  </CardWrapper>
)

export default PortfolioCard
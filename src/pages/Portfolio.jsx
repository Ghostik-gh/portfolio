import PortfolioInfo from '../components/PortfolioInfo/PortfolioInfo';
import { RightArrow } from '../components/RightArrow';

function Portfolio() {
  return (
    <>
      <PortfolioInfo />
      <RightArrow to={'/projects'} />
    </>
  );
}

export { Portfolio };

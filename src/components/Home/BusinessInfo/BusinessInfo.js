import React from "react";
import InfoCard from '../InfoCard/InfoCard';
import airbnb from "../../../images/logos/airbnb.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";


const infosData = [
  {
    id: 1,
    image: airbnb,
  },
  {
    id: 2,
    image: google,
  },
  {
    id: 3,
    image: netflix,
  },
  {
    id: 4,
    image: slack,
  },
  {
    id: 5,
    image: uber,
  },
];

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row offset-md-1">
                {
                    infosData.map(info => <InfoCard info={info} key={info.id}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;
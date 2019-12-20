import React, { Fragment, useState } from "react";

import { TermsAndConditionsDetails } from "./content";
import TermsAndConditions from "shared/dist/components/TermsAndConditions";
import { OnboardingRoutes } from "../OnboardingRouter/Routes";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const TNC = ({ history }) => {
  const classes = useStyles();
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    history.push(OnboardingRoutes.AUTHENTICATE.path);
  };

  const handleNavigateBack = () => {
    history.push(OnboardingRoutes.ENTITY.path);
  };

  return (
    <Fragment>
      <TermsAndConditions
        title={TermsAndConditionsDetails.title}
        formLabel={TermsAndConditionsDetails.formLabel}
        agreed={agreed}
        onChangeAgreed={() => setAgreed(!agreed)}
      />
      <div className={classes.buttonsContainer}>
        <SNETButton color="primary" children="cancel" />
        <SNETButton color="primary" children="back" onClick={handleNavigateBack} />
        <SNETButton color="primary" variant="contained" children="accept" onClick={handleAccept} disabled={!agreed} />
      </div>
    </Fragment>
  );
};

export default TNC;

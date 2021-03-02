import React, { useState } from "react";

import { Button } from "tabler-react";
import { Grid } from "tabler-react";
import { StatsCard } from "./StatsCard";

const GridContainer = (props) => (
  <Grid.Col sm={6} md={4} lg={3}>
    {props.children}
  </Grid.Col>
);

export const Home = ({ data }) => {
  const [isDaily, setIsDaily] = useState(true);
  // diffs are weekly if isDaily is false

  const current = data[0];
  const previous = isDaily ? data[1] : data[7];

  const handleToggleDaily = (dailyButton) => {
    if ((dailyButton && !isDaily) || (!dailyButton && isDaily)) {
      setIsDaily(!isDaily);
    }
  };

  return (
    <div>
      <div className="toggle-daily" role="button">
        <Button
          className="daily"
          onClick={(e) => handleToggleDaily(true)}
          color={isDaily ? "primary" : "secondary"}
        >
          Daily
        </Button>
        <Button
          className="weekly"
          onClick={(e) => handleToggleDaily(false)}
          color={isDaily ? "secondary" : "primary"}
        >
          Weekly
        </Button>
      </div>
      
      {current && previous && (
        <Grid.Row cards deck>
          {Object.keys(current).map((key) => (
            <GridContainer>
              <StatsCard
                movement={current[key] - previous[key]}
                movementType={isDaily ? "daily" : "weekly"}
                total={current[key]}
                label={key}
              />
            </GridContainer>
          ))}
        </Grid.Row>
      )}
    </div>
  );
};

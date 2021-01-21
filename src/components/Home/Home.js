import { Button } from "tabler-react";
import { Grid } from "tabler-react";
import React from "react";
import { StatsCard } from "./StatsCard";

const GridContainer = (props) => (
  <Grid.Col sm={6} md={4} lg={3}>
    {props.children}
  </Grid.Col>
);

export const Home = ({ data, isDaily, toggleDaily }) => {
  const current = data[0];
  const previous = isDaily ? data[1] : data[7];

  const handleClickDaily = (e) => {
    if (!isDaily) {
      toggleDaily();
    }
  };

  const handleClickWeekly = (e) => {
    if (isDaily) {
      toggleDaily();
    }
  };

  return (
    <div>
      <div className="toggle-daily" role="button">
        <Button
          className="daily"
          onClick={handleClickDaily}
          color={isDaily ? "primary" : "secondary"}
        >
          Daily
        </Button>
        <Button
          className="weekly"
          onClick={handleClickWeekly}
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

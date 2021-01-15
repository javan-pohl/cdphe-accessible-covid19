import { Grid } from "tabler-react";
import React from "react";
import { StatsCard } from "./StatsCard";

const GridContainer = (props) => (
  <Grid.Col sm={6} md={4} lg={3}>
    {props.children}
  </Grid.Col>
);

export const Home = (props) => {
  const { current, previous, movementType } = props;

  return (
    <div>
      {current && previous && (
        <Grid.Row cards deck>
          {Object.keys(current).map((key) => (
            <GridContainer>
              <StatsCard
                movement={current[key] - previous[key]}
                movementType={movementType}
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

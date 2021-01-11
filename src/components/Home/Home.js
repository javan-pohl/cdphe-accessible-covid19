import React from "react";
import { Grid } from "tabler-react";
import { StatsCard } from "./StatsCard";

const GridContainer = (props) => (
  <Grid.Col sm={6} md={4} lg={3}>
    {props.children}
  </Grid.Col>
);

export const Home = (props) => {
  const { today, yesterday } = props;

  return (
    <div>
      {today && yesterday && (
        <Grid.Row cards deck>
          {Object.keys(today).map((key) => (
            <GridContainer>
              <StatsCard
                movement={today[key] - yesterday[key]}
                movementType={" daily"}
                total={today[key]}
                label={key}
              />
            </GridContainer>
          ))}
        </Grid.Row>
      )}
    </div>
  );
};

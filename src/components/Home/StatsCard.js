import React from "react";
import { Card, Header, Text, Icon } from "tabler-react";

export const StatsCard = (_ref) => {
  var className = _ref.className,
    movement = _ref.movement,
    movementType = _ref.movementType,
    total = _ref.total,
    label = _ref.label;
    

  var movementString = "" + (movement > 0 ? "+" : "") + movement + movementType;
  var movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";

  return (
    <Card className={className}>
      <Card.Body className='p-3 text-center'>
        <Text color={movementColor} className='text-right'>
          {movementString}{" "}
          <Icon
            name={
              !movement ? "minus" : movement > 0 ? "chevron-up" : "chevron-down"
            }
          />
        </Text>
        <Header className='m-0'>{total}</Header>
        <Text color='muted' className='mb-4'>
          {label}
        </Text>
      </Card.Body>
    </Card>
  );
};
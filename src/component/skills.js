import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

const Skills = props => {
  return (
    <div>
      <Grid className="demo-grid-2 p-0 m-0">
        <Cell col={3}>
          <div>{props.skills}</div>
        </Cell>
        <Cell col={9}>
          <div>
            <ProgressBar
              style={{
                width: "75%",
                marginLeft: "15px",
                marginTop: "8px",
                height: "7px"
              }}
              progress={props.progress}
            />
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Skills;

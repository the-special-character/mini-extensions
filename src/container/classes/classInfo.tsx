import React, { memo } from "react";
import { AppProps } from "../../App";
import ClassDetails from "../../components/ClassDetails";

const ClassInfo = ({ classes }: Pick<AppProps, 'classes'>) => {
  return (
    <div
      data-testid="class-info"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {classes.map((x) => (
        <ClassDetails data={x} key={x.id} />
      ))}
    </div>
  );
};

export default memo(ClassInfo);

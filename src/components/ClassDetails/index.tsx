import React, { memo } from "react";

type Props = {
  data: AirTableResponseObj<ClassInfo>;
};

const ClassDetails = ({ data }: Props) => {
  return (
    <div style={{
      border: '1px solid black',
      padding: '1rem',
      borderRadius: 8,
    }}>
      <h2>Name</h2>
      <p>{data.fields.Name}</p>
      <h2>Students</h2>
      <div>
        {data.fields.Students.map(y => y.fields.Name).join(', ')}
      </div>
    </div>
  );
};

export default memo(ClassDetails);

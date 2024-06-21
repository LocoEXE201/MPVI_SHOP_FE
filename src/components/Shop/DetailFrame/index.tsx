import React from "react";
import DetailFrameComponent from "./DetailFrameComponent";

interface Description {
  notes: string;
}

const DetailFrame = ({ notes }: Description) => {
  return (
    <>
      <DetailFrameComponent notes={notes} />
    </>
  );
};

export default DetailFrame;

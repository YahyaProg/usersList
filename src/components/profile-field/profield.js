import React from "react";
import { Upload, Button } from "antd";
const Profield = () => {
  return (
    <Upload listType="picture" maxCount={1}>
      <Button>Upload (Max: 1)</Button>
    </Upload>
  );
};

export default Profield;

import React from "react";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import Form from "../form";

const CreatePostDesktop = () => {
  return (
    <BasicLayoutDesktop>
      <main className="w-[600px] mx-auto">
        <Form />
      </main>
    </BasicLayoutDesktop>
  );
};

export default CreatePostDesktop;

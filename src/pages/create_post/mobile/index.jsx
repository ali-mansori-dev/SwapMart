import React from "react";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import Form from "../form";

const CreatePostMobile = () => {
  return (
    <BasicLayoutDesktop>
      <main className="w-full mx-auto">
        <Form />
      </main>
    </BasicLayoutDesktop>
  );
};

export default CreatePostMobile;

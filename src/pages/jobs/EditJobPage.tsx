import ContentWrapper from "@/components/wrapper/ContentWrapper";
import EditJob from "@/features/job/EditJob";
import React from "react";

type Props = {};

const EditJobPage = (props: Props) => {
  return (
    <ContentWrapper>
        <EditJob />
    </ContentWrapper>
  );
};

export default EditJobPage;

import Loading from "@/components/Spinners/Loading";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import Jobs from "@/features/job/Jobs";
import Pagination from "@/features/pagination/Pagination";
import Search from "@/features/search/Search";
import { IOptions, getJobs } from "@/store/features/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React, { useEffect, useState } from "react";

type Props = {};

const JobsPage = (props: Props) => {
  const isLoading = useAppSelector((state) => state.job.isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);

  return (
    <ContentWrapper>
      {isLoading && <Loading className="absolute left-1/2 top-1/2"/>}
      {!isLoading && (
        <>
          <Search />
          <Jobs />
          <Pagination />
        </>
      )}
    </ContentWrapper>
  );
};

export default JobsPage;

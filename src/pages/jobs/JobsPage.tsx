import Loading from "@/components/Spinners/Loading";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import Jobs from "@/features/job/Jobs";
import Pagination from "@/features/pagination/Pagination";
import Search from "@/features/search/Search";
import { IOptions, getJobs } from "@/store/features/jobSlice";
import { useAppDispatch } from "@/store/store";
import React, { useState } from "react";

type Props = {};

const initialSearchState: IOptions = {
  search: "",
  jobStatus: "all",
  jobType: "all",
  sort: "newest",
  page: 1,
};

const JobsPage = (props: Props) => {
  const [searchOptions, setSearchOptions] =
    useState<IOptions>(initialSearchState);

  return (
    <ContentWrapper>
      <Search />
      <Jobs />
      <Pagination />
    </ContentWrapper>
  );
};

export default JobsPage;

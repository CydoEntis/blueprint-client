import { getJobs, IOptions, ISearchOptions, setPage } from "@/store/features/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";



const Pagination = () => {
  const [searchParams] = useSearchParams();
  const searchValues = useAppSelector(state => state.job.searchOptions);
    const numOfPages = useAppSelector((state) => state.job.numOfPages);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const dispatch = useAppDispatch();
  const currPage = searchParams.get("page");
  let classes = "";

  async function paginate(page: number) {
    dispatch(setPage(page));
    const options: IOptions = {
        ...searchValues,
        page
      }
    // setSearchOptions({...searchOptions, page: page})
    // console.log(page);
    // console.log(searchOptions);
    await dispatch(getJobs(options))
  }


  return (
    <div className="absolute bottom-3 flex w-full items-center justify-center" >
      {pages.map((page) => {
        if (page === Number(currPage)) {
            classes = "bg-blue-40 border border-blue-40 text-white";
        } else {
            classes = "bg-blue-10 border border-blue-40 text-blue-40";
        }
          return (
            <Link
              className={`${classes} mx-1 flex h-[36px] w-[40px] items-center  justify-center rounded-md`}
              key={page}
              to={`/jobs?page=${page}`}
              onClick={() => paginate(page)}
            >
              {page}
            </Link>
          );
      })}
    </div>
  );
};

export default Pagination;

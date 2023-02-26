import Button from "@/components/buttons/Button";
import {
  getJobs,
  IOptions,
  setPage,
} from "@/store/features/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

import {  useSearchParams } from "react-router-dom";

const getPages = (currentPage: number, maxPages: number, pageNumbers: number[]) => {
	let startingPage;
	let endingPage;
	if (currentPage === 1) {
		startingPage = currentPage - 1;
		endingPage = currentPage + maxPages - 1;
	} else if (currentPage === 2) {
		startingPage = currentPage - 2;
		endingPage = currentPage + 3;
	} else if (currentPage === 3) {
		startingPage = currentPage - 3;
		endingPage = currentPage + 2;
	} else if (currentPage === pageNumbers.length) {
		startingPage = pageNumbers.length - (maxPages);
		endingPage = pageNumbers.length;
	} else if (currentPage === pageNumbers.length - 3) {
		startingPage = currentPage - 3;
		endingPage = currentPage + 2;
	} else if (currentPage === pageNumbers.length - 2) {
		startingPage = currentPage - 3;
		endingPage = currentPage + 2;
	} else if (currentPage === pageNumbers.length - 1) {
		startingPage = currentPage - 4;
		endingPage = currentPage + 1;
	} else {
		startingPage = currentPage - 3;
		endingPage = currentPage + 2;
	}

	return pageNumbers.slice(startingPage, endingPage);
};


const Pagination = () => {
  const [searchParams] = useSearchParams();
  const searchValues = useAppSelector((state) => state.job.searchOptions);
  const numOfPages = useAppSelector((state) => state.job.numOfPages);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const currentPage = useAppSelector((state) => state.job.page);

  let currentPages = getPages(currentPage, 5, pages);

  const dispatch = useAppDispatch();
  let classes = "";

  async function paginate(page: number) {
    dispatch(setPage(page));
    const options: IOptions = {
      ...searchValues,
      page,
    };
    await dispatch(getJobs(options));
  }

  return (
    <div className="py-3 flex w-full items-center ">
      {currentPages.map((page) => {
        if (page === Number(currentPage)) {
          classes = "bg-blue-40 border border-blue-40 text-white";
        } else {
          classes = "bg-blue-10 border border-blue-40 text-blue-40";
        }
        return (
          <Button
            className={`${classes} mx-1 flex h-[48px] w-[52px] items-center justify-center shadow-md rounded-md`}
            key={page}
            onClick={() => paginate(page)}
            type={"button"}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default Pagination;

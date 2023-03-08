import Button from "@/components/buttons/Button";
import { usePagination } from "@/hooks/usePagination";
import { getJobs, IOptions, setPage } from "@/store/features/jobSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";

const Pagination = () => {
  const currentPage = useAppSelector((state) => state.job.page);
  const numOfPages = useAppSelector((state) => state.job.numOfPages);
  const searchValues = useAppSelector((state) => state.job.searchOptions);

  const paginationRange = usePagination({
    currentPage,
    totalCount: numOfPages,
    siblingCount: 5,
    pageSize: 10,
  });

  if (typeof paginationRange === "number") {
    if (currentPage === 0 || paginationRange < 2) {
      return null;
    }
  }

  let lastPage
  if (typeof paginationRange === "object") {
     lastPage = paginationRange[paginationRange.length - 1];
  }

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

  const pages = paginationRange as Array<number>;

  return (
    <div className="flex w-full items-center py-3 ">
      {pages.map((page) => {
        if (page === Number(currentPage)) {
          classes = "bg-blue-40 border border-blue-40 text-white";
        } else {
          classes = "bg-blue-10 border border-blue-40 text-blue-40";
        }
        return (
          <Button
            className={`${classes} mx-1 flex h-[48px] w-[52px] items-center justify-center rounded-md shadow-md`}
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

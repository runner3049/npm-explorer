import { useSearchParams } from 'react-router-dom';
import { SearchPackage } from 'src/api/hooks/packages/useSearchPackages';
import useGetSearchParams from 'src/hooks/useGetSearchParams';
import { PAGE, PER_PAGE_PACKAGES_COUNT } from 'src/api/configs';
import colors from 'src/styles/colors';
import { maxWidth } from 'src/styles/configs';
import { text } from 'src/configs/configs';
import SortOptions from '../SortOptions/SortOptions';
import Pagination from '../Pagination/Pagination';
import PackageList from '../PackageList/PackageList';

export default function SearchResultLayout({ data }: SearchPackage) {
  const [, setSearchParams] = useSearchParams();
  const page = Number(useGetSearchParams(PAGE, 1));
  const pageCount = Math.ceil(data.total / PER_PAGE_PACKAGES_COUNT);
  const showPagination = data && data.total > PER_PAGE_PACKAGES_COUNT;

  function handlePageChange(page: number) {
    setSearchParams((params) => {
      params.set(PAGE, String(page));
      return params;
    });
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: colors.c14,
          borderBottom: `1px solid ${colors.c1}`,
        }}
      >
        <div
          style={{
            maxWidth: maxWidth,
            margin: 'auto',
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2 style={{ fontWeight: 600, fontSize: '1.125rem' }}>
            {text.countPackagesFound(data.total)}
          </h2>
          {showPagination && (
            <Pagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
          )}
        </div>
      </div>
      {Boolean(data.objects.length) && (
        <div
          style={{
            maxWidth: maxWidth,
            margin: 'auto',
            display: 'flex',
            padding: '16px',
          }}
        >
          <div style={{ width: 250 }}>
            <SortOptions />
          </div>
          <div
            style={{
              width: 'calc(100% - 250px)',
              padding: '16px',
            }}
          >
            <PackageList data={data.objects} />
            {showPagination && (
              <Pagination page={page} pageCount={pageCount} handlePageChange={handlePageChange} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

import ReactPaginate from 'react-paginate';

export const Pegination = ({totalPage, activePage,setActivePage}) => {

  return <ReactPaginate 
  pageCount={totalPage}
  previousLabel='Prev'
  forcePage={activePage == 1 ? 0 : activePage - 1}
  className='pagination justify-content-center py-5 gap-2'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  previousLinkClassName='btn btn-primary'
  nextLinkClassName='btn btn-primary'
  activeClassName='active'
  onPageChange={(data)=> setActivePage(data.selected + 1)}
  />

}

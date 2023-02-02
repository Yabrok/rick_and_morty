



export const Search = ({search, activePage}) => {

  return (
    <input
      onChange={(evt) => {
        search(evt.target.value)
        activePage(1)
      }}
      className="form-control w-100"
      placeholder="Search..."
      type="text"
    />
  )
}


export const Card = ({ obj }) => {
  const { status } = obj
  return (
    <div
      key={obj.id}
      className="card text-white position-relative"
      style={{ width: '261px', backgroundColor: '#3C3E44' }}>

      {
        (function () {
          if (status == 'Alive') {
            return (
              <span className="position-absolute badge bg-success p-2"
                style={{ 'top': '10px', 'right': '10px' }}>
                {status}
              </span>
            )
          } else if (status == 'Dead') {
            return (
              <span className="position-absolute badge bg-danger p-2"
                style={{ 'top': '10px', 'right': '10px' }}>
                {status}
              </span>
            )
          } else {
            return (
              <span className="position-absolute badge bg-secondary p-2"
                style={{ 'top': '10px', 'right': '10px' }}>
                {status}
              </span>
            )
          }
        })()
      }

      <img src={obj.image} className="card-img-top" alt={obj.name} />
      <div className="card-body">
        <h2 className="card-title h4">{obj.name}</h2>
        <p className="card-text m-0" >
          Last location:
        </p>
        <p className="card-text">
          {obj.location?.name}
        </p>
        <a href="#" className="btn btn-success">More</a>
      </div>
    </div>
  )
}
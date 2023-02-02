import { FilterBtn } from '../FilterBtn/FilterBtn'

export const Filter = ({setStatus,setGender}) => {
  const statusData = ['alive', 'dead', 'unknown']
  const genderData = ['male', 'female', 'genderless']
  return (
    <>
      <p className="h2 fw-bold text-center mt-3 mb-1">Filter</p>
      <p className="mb-4 text-primary text-center text-decoration-underline"
        style={{ 'cursor': 'pointer' }}>Clear all
      </p>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Filter by satus
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show"
            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {
                statusData.map((item, index) => <FilterBtn 
                setState={setStatus}
                key={index} 
                text={item} 
                index={index} 
                name={'status'}/>)
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              Filter by gender
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse"
            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              {
                genderData.map((item, index) => <FilterBtn 
                setState={setGender}
                key={index} 
                text={item} 
                index={index} 
                name={'gender'}/>)
              }
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button"
              data-bs-toggle="collapse" data-bs-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
              Filter by species
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse"
            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
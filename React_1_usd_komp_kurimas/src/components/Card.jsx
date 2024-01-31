/* eslint-disable react/prop-types */
function Card({myData}) {

    console.log(myData);
  const {
    logo,
    company,
    featured,
    role,
    level,
    postedAt,
    contract,
    location,
  } = myData;
  return (
    <div className="card">
      <div>{logo}</div>

      <div>
      <span className="firstRow">{company}  </span>
      {myData.new&&<span className="firstRow">   NEW</span>}
      {featured&&<span className="firstRow">   FEATURED</span>}
</div>
<div>
      <span>{level}  </span>
      <span>  {role}</span>
      </div>
      <div>
      <span>   {postedAt}   </span>
      <span>   {contract}   </span>
      <span>   {location}   </span>
      </div>
    </div>
  );
}

export default Card;

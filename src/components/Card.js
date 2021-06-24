export const Card = ({ monster: { id, name, email } }) => (
  <div className="card-container">
    <img alt="" src={`https://robohash.org/${id}?set=set2&size=138x138`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

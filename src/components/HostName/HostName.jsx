import "./HostName.scss";

function HostName({ host }) {
  // On split autour des espaces
  const hostSplitName = host.name.split(" ");
  const [name, lastname] = hostSplitName;

  return (
    <div className="host">
      <div className="host__name">
        <p>{name}</p>
        <p>{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
}

export default HostName;

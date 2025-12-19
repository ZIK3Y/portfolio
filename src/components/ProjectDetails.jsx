import "../style/ProjectDetails.css";

function ProjectDetails(props, onVisible) {
  if (!visible) return null;

  return (
    <div className="container bg-black border-white v-80 h-80 justify-content-center align-items-center">
      <div className="row">
        <div className="col-12">
          <h1>{props.title}</h1>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}

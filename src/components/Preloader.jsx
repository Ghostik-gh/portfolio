function Preloader() {
  return (
    <div className="d-flex justify-content-center py-3">
      <strong>Loading... </strong>
      <div
        className="spinner-border ml-auto ms-2"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export { Preloader };

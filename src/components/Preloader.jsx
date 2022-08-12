function Preloader() {
  return (
    <div class="d-flex justify-content-center py-3">
      <strong>Loading... </strong>
      <div
        class="spinner-border ml-auto ms-2"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}

export { Preloader };

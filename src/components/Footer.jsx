function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="ms-3 mb-1 text-muted">
            © Mashirin Fedor {new Date().getFullYear()}
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3">
            <div
              className="discord"
              onClick={() => {
                navigator.clipboard.writeText('GhostikGH#5563');
                alert('Text copied');
              }}
            >
              <i className="bi-discord" role="img" aria-label="Discord"></i>
            </div>
          </li>
          <li className="ms-3">
            <a href="https://github.com/Ghostik-gh">
              <i className="bi-github" role="img" aria-label="GitHub"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://t.me/GhostikGH">
              <i className="bi-telegram" role="img" aria-label="Facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export { Footer };

function Footer() {
  return (
    <footer className="page-footer blue darken-4">
      <div className="footer-copyright">
        <div className="container grey-text text-lighten-4">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/Ghostik-gh"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

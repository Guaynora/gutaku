export default function Loader() {
  return (
    <>
      <div></div>
      <style jsx>{`
        div {
          position: absolute;
          border: 4px solid var(--white);
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          border-left-color: transparent;
          margin: auto;
          animation: spin 1s linear infinite;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export const Header = () => {
  return (
    <>
      <section>
        <h2>Header</h2>
        <input type="text" name="search" placeholder="Buscar propiedades" />
      </section>
      <style jsx>{`
        section {
          text-align: center;
          width: 100%;
        }
        h2 {
          margin-left: 15px;
        }
        input {
          min-width: 300px;
          max-width: 700px;
          width: 70%;
          height: 50px;
          background: transparent;
          color: #fff;
          border: none;
          border-bottom: 2px solid;
          padding: 0 50px 0 15px;
          outline: none;
        }
        ::placeholder {
          color: #fff;
        }
      `}</style>
    </>
  );
};

export const Preview = (props) => {
    return(<>
      <section>
        <div className='body'>
          {props.children}
        </div>
      </section>
      <style jsx>{`
        section{
          position: fixed;
          top: 0;
          left:0;
          right:0;
          height:100vh;
          background-color:rgba(0,0,0,0.4);
          z-index:99;
          display:grid;
          justify-items:center;
          align-items:center;
          overflow:auto;
        }
        .body{
          margin: 20px 0;
          width:70%;
          min-width:310px;
          background-color:#fff;
          max-width:1000px;
        }
        :global(body) {
          overflow:hidden;
        }
      `}</style>
  
    </>)
  }
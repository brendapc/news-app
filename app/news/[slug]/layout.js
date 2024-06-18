export default function NewsDetailLayout({ children, modal }) {

  /* 'modal' paralel route, custom name given to the @folder */

  return (
    <>
      {modal}
      {children}
    </>
  );
}
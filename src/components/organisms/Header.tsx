export const Header = (props: any) => {
  const { children } = props;
  return (
    <>
      <header className="">
        {children}
      </header>
    </>
  );
};
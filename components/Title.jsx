export function Title(props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-4 my-3">
        <h1 className="text-3xl text-black">{props.name}</h1>
        <h2 className="text-2xl text-orange-400">{props.title}</h2>
        <a className="text-sm text-black" href={props.link}>
          sgeorgedev.netlify.app/
        </a>
      </div>
    </>
  );
}

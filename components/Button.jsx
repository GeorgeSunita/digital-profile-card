export function Button(props) {
  return (
    <>
      <a
        href={props.link}
        className="w-28 rounded-lg bg-indigo-700 text-slate-50 cursor-pointer inline-block text-lg px-6 py-2.5 mx-1 transition:all hover:bg-violet-600 hover:transition brightness-150 hover:translate-y-1"
      >
        {props.title}
      </a>
    </>
  );
}

export function Intro(props) {
  return (
    <>
      <div className="flex flex-col px-2 my-6">
        <h3 className="font-black text-lg">{props.heading}</h3>
        <p className="font-normal font-black justify-start">{props.text}</p>
      </div>
    </>
  );
}
